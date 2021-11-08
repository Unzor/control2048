# http-2048
2048 in an Electron app, but secondarily controlled by HTTP requests!

# Setup
Run this in your terminal:
```
git clone https://github.com/Unzor/http-2048
cd http-2048
npm start
```
Then make an HTTP request to localhost:2048 at "/api/move" with a body like this:
```json
{
 "direction": "up"
}
 ```
