from flask import Flask,redirect,url_for,render_template,request, session, g
from flask_bcrypt import Bcrypt
from azure.identity import ClientSecretCredential
from azure.keyvault.secrets import SecretClient
from datetime import timedelta
from dotenv import load_dotenv
import os
import pdb


app = Flask(__name__)
bcrypt = Bcrypt(app)


load_dotenv()
# setting up key from azure
kVURL = os.environ.get("KEY_VAULT") 


credential = ClientSecretCredential(
    tenant_id=os.environ["TENANT_ID"],
    client_id=os.environ["CLIENT_ID"],
    client_secret=os.environ["CLIENT_SECRET"]
)
client = SecretClient(vault_url=kVURL, credential=credential)

app.secret_key = client.get_secret(os.environ.get("KEY_NAME")).value # gathered secret key form az keyvault

recipe_dict = [{"name": "sourdough", "description": "This is a perfect sourdough recipe for all levels of bakers!", "image": "sourdough.png"}, 
                {
    "name": "onion",
    "description": "It is just an onion",
    "image": "onion.png"
},{
    "name": "chocolate cake",
    "description": "rich and moist chocolate cake",
    "image": "cake.png"
}]


# --------------------
# HOME
# --------------------
@app.route('/')
def home():
    cart = None

    user_name = None
    if "user" in session:
        user_name = session["user"].get("name")

    return render_template('index.html', cart=cart, userName=user_name, recipe_dict = recipe_dict)


# --------------------
# RECIPES (ALL)
# --------------------
@app.route('/recipes')
def all_recipes():
    return render_template('allRecipes.html')


# --------------------
# RECIPES BY CATEGORY
# (breads, cookies, pastries, etc.)
# --------------------
@app.route('/recipes/<group>')
def recipe_group(group):
    return render_template('recipeGroup.html', recipeGroup=group)


# --------------------
# INDIVIDUAL RECIPE PAGE
# (IMPORTANT: namespaced to avoid route conflicts)
# --------------------
@app.route('/recipe/<recipeName>')
def recipe(recipeName):
    return render_template('recipePage.html', recipeName=recipeName, recipe_dict = recipe_dict)


# --------------------
# ABOUT PAGE
# --------------------
@app.route('/about')
def about():
    return render_template('aboutUs.html')


# --------------------
# CONTACT PAGE
# --------------------
@app.route('/contact')
def contact():
    return render_template('contact.html')



# --------------------
# Seaerch Route
# --------------------
@app.route('/search',  methods = ['POST', 'GET'])
def search():
    if request.method == 'GET':
        query= request.args.get("query", "").lower()

        matchedList = []

        #checks all the recipes in the dict to see if any match
        for recipe in recipe_dict:
            if query in recipe["name"]:
                print("found a match\n")
                print(recipe["name"])
                matchedList.append(recipe)
            else:
                print("nothing found")
        
    return render_template('search.html', matchedList = matchedList)



if __name__ == '__main__':
    app.run(debug = True)

