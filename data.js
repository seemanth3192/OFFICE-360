var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.008846015486698278,
          "pitch": 0.31333610277553703,
          "rotation": 3.141592653589793,
          "target": "1-2"
        },
        {
          "yaw": 0.04365878862529726,
          "pitch": 0.1374869268869947,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03623367754974183,
          "pitch": 0.21732160049614535,
          "rotation": 0,
          "target": "2-3"
        },
        {
          "yaw": -3.1234876252300445,
          "pitch": 0.1608389404623729,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1070976556138028,
          "pitch": 0.35357366247420785,
          "rotation": 3.141592653589793,
          "target": "1-2"
        },
        {
          "yaw": 0.07495753356274726,
          "pitch": 0.14871692853913032,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Office 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
