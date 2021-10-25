# Browserstack-TestCafe-Example

## STEPS  :

## CONFIGURE BROWSERSTACK CONFIG JSON FILE  :

```sh
set --use-file-for-fake-video-capture location - 

Path for mac: /Users/test1/Documents/video/sample_mjpeg.mjpeg 
Path for win: C:\\Users\\hello\\Documents\\video\\sample_mjpeg.mjpeg
```

### Start Local binary - 
```sh
./BrowserstackLocal/BrowserStackLocal --key ACCESSKEY  --local-identifier TestCafe —daemon start
```


```sh
export BROWSERSTACK_USERNAME=USERNAME && export BROWSERSTACK_ACCESS_KEY=ACCESSKEY
export BROWSERSTACK_CAPABILITIES_CONFIG_PATH="/Directory_Path/browserstack-config.json"
export BROWSERSTACK_USE_AUTOMATE="1"      
export BROWSERSTACK_LOCAL_IDENTIFIER="TestCafe" 
```

### RUN TEST

```sh
npm install
npm run test_webcam
```

