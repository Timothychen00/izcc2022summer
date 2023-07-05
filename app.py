from flask import Flask
from main.routes import app_route
import os

app=Flask(__name__)
app.config['UPLOAD_FOLDER'] = '/'
app.config['MAX_CONTENT_LENGTH'] = 3 * 1024 * 1024  # 5MB
app.secret_key='os.urandom(16).hex()'
app.register_blueprint(app_route)

if __name__=='__main__':
    app.run(debug=True,port=8080)