from flask import Flask
from main.routes import app_route
import os
from dotenv import load_dotenv
app=Flask(__name__)
load_dotenv()

app.secret_key=os.urandom(16).hex()
app.register_blueprint(app_route)

if __name__=='__main__':
    app.run(debug=True)