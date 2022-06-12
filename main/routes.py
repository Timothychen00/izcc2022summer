from flask import Blueprint, render_template
app_route=Blueprint('izcc',__name__,static_folder='static',template_folder='../templates')

@app_route.route('/')
def home():
    print(1)
    return render_template('index.html')