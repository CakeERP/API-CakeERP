import json
import requests

headers = {
  'x-cake-token': 'Token',
  'Content-Type': 'application/json'
}

# GET-API
def get_produto():
    url = "https://app.cakeerp.com/api/product/all"
    response = requests.request("GET", url, headers=headers)
    return response.json()

# POST-API
def post_produto():
    url = "https://app.cakeerp.com/api/product"
    data = {
        "name": "API Cake",
        "code": "CAKE-01",
        "price_sell": 95.99,
        "stock": 10.0
    }
    response = requests.request("POST", url, headers=headers, data=json.dumps(data))
    return response.json()

if __name__ == '__main__':
    print(get_produto())
    print(post_produto())

