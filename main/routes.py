from flask import Blueprint, render_template
app_route=Blueprint('izcc',__name__,static_folder='static',template_folder='../templates')

@app_route.route('/')
def home():
    print(1)
    return render_template('index.html')

@app_route.route('/aboutus')
def about():
    return render_template('aboutus.html')

@app_route.route('classes')
def classes():
    return render_template('classes.html')

@app_route.route('contact')
def classes():
    return render_template('contact.html')

@app_route.route('/join')
def join():
    return render_template('join.html')