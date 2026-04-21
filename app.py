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

@app.route('/')
def home():
    cart = None

    if "user" in session:
        userName = session["user"].get("name")
    # Render the HTML and pass data to it
    return render_template('index.html', cart = cart)

if __name__ == '__main__':
    app.run(debug = True)