# from flask import Flask

# api = Flask(__name__)

# @api.route('/data')
# def my_profile():

#     return "expenses"



from flask import Flask, redirect, url_for, request
from flask_cors import CORS,  cross_origin

app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# @app.route('/profile')
# @cross_origin()
# def my_profile():
#     if request.method == 'GET':
#         print("someone requested")
#         response_body = {
#             "name": "Nagato",
#             "about" :"Hello! I'm a full stack developer that loves python and javascript"
#         }

#         return "fuck the pigeon holes"


@app.route('/data', methods = ['POST'])
@cross_origin()
def recv_amount():
    if request.method == 'POST':
        data = request.form()
        print(data)

    return "hello"

if __name__ == "__main__":
    app.run(debug=True)