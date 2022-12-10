from flask import Flask
from flask_restful import Api, Resource
from preprocessing import detect

app = Flask(__name__)
api = Api(app)

class GetDetect(Resource):
    def get(self,url):
        status = False
        result = ""
        if detect(url):
            status = True
            result = detect(url)
        return {"status": status,"result":result}

api.add_resource(GetDetect,"/getdetect/<path:url>")
  

if __name__ == "__main__": 
    app.run(debug=True)