var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada-exterior",
      "name": "Fachada exterior",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.611032294754974,
        "pitch": -0.23014472381563955,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.038417401610607,
          "pitch": -0.00495497497561459,
          "rotation": 0,
          "target": "1-ingreso-a-propiedad"
        },
        {
          "yaw": 1.0194356770461397,
          "pitch": 0.03187836743295236,
          "rotation": 0,
          "target": "2-ingreso-al-parque-"
        },
        {
          "yaw": 0.044172526778286425,
          "pitch": -0.004126258671453442,
          "rotation": 0,
          "target": "5-parque"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7940326835062983,
          "pitch": -0.3353904152316094,
          "title": "Casa en la Cañada - Pilar",
          "text": "<div>Superficie Total: 400 m2</div><div>Superficie cubierta 144 m2&nbsp;</div><div>Expensas 36.000<br></div><div>Todos los servicios</div><div>Calefacción por radiadores</div>"
        }
      ]
    },
    {
      "id": "1-ingreso-a-propiedad",
      "name": "Ingreso a propiedad",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.07479982508547423,
        "pitch": -0.1658721145439781,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.751394930508302,
          "pitch": 0.1869817959812181,
          "rotation": 0,
          "target": "0-fachada-exterior"
        },
        {
          "yaw": -0.48035541270022364,
          "pitch": -0.01957817531636863,
          "rotation": 0,
          "target": "9-ingreso-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingreso-al-parque-",
      "name": "Ingreso al parque ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0883420498909633,
          "pitch": 0.015439991166541489,
          "rotation": 0.7853981633974483,
          "target": "1-ingreso-a-propiedad"
        },
        {
          "yaw": 0.06764690693087516,
          "pitch": 0.02056958891311389,
          "rotation": 0,
          "target": "7-quincho-"
        },
        {
          "yaw": -1.2679783450769229,
          "pitch": 0.03544690722321775,
          "rotation": 0,
          "target": "6-prgola"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vista-lateral",
      "name": "Vista lateral",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4230548735871089,
        "pitch": 0.38474451601118,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.7942726693151103,
          "pitch": 0.02576445778187164,
          "rotation": 0,
          "target": "8-jardn-de-invierno-"
        },
        {
          "yaw": 2.6172929576913546,
          "pitch": 0.10029877651385277,
          "rotation": 0,
          "target": "4-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-parque",
      "name": "Parque",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0793599856582912,
          "pitch": 0.14367040331174863,
          "rotation": 0,
          "target": "8-jardn-de-invierno-"
        },
        {
          "yaw": 2.1842685727354354,
          "pitch": 0.17656183613989462,
          "rotation": 3.141592653589793,
          "target": "6-prgola"
        },
        {
          "yaw": 2.819762795523072,
          "pitch": 0.1414155155217962,
          "rotation": 0.7853981633974483,
          "target": "5-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-parque",
      "name": "Parque",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6765969702774264,
          "pitch": 0.04511508120556229,
          "rotation": 0,
          "target": "7-quincho-"
        },
        {
          "yaw": -1.4115222003118326,
          "pitch": 0.12199387230841197,
          "rotation": 0,
          "target": "6-prgola"
        },
        {
          "yaw": -2.418166757465059,
          "pitch": 0.12951446500428787,
          "rotation": 0,
          "target": "10-sala-de-estar"
        },
        {
          "yaw": 1.2335376867591208,
          "pitch": 0.12010067823623238,
          "rotation": 0.7853981633974483,
          "target": "2-ingreso-al-parque-"
        },
        {
          "yaw": 2.380216459467479,
          "pitch": 0.11304776126798188,
          "rotation": 0,
          "target": "0-fachada-exterior"
        },
        {
          "yaw": -3.1080321049344484,
          "pitch": -0.0027374523691765518,
          "rotation": 1.5707963267948966,
          "target": "1-ingreso-a-propiedad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-prgola",
      "name": "Pérgola",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.06767603222018792,
        "pitch": 0.5780365057466028,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.3513887681831651,
          "pitch": 0.19383928400294437,
          "rotation": 0,
          "target": "4-parque"
        },
        {
          "yaw": 2.474001948301062,
          "pitch": 0.41284119038366285,
          "rotation": 0,
          "target": "5-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-quincho-",
      "name": "Quincho ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.825542080009388,
          "pitch": 0.15661704742631244,
          "rotation": 0,
          "target": "2-ingreso-al-parque-"
        },
        {
          "yaw": -2.2395864252597164,
          "pitch": 0.1233957577705116,
          "rotation": 0,
          "target": "5-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-jardn-de-invierno-",
      "name": "Jardín de invierno ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1495983453769565,
        "pitch": 0.1583301363395222,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.2800181258951078,
          "pitch": 0.14767399352426125,
          "rotation": 0,
          "target": "3-vista-lateral"
        },
        {
          "yaw": -3.127952866940486,
          "pitch": 0.2161465209210256,
          "rotation": 0,
          "target": "11-comedor"
        },
        {
          "yaw": 1.3405948585403458,
          "pitch": 0.09578167785618774,
          "rotation": 0,
          "target": "4-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ingreso-pb",
      "name": "Ingreso PB",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8616641436000521,
          "pitch": 0.1637437623303697,
          "rotation": 0,
          "target": "10-sala-de-estar"
        },
        {
          "yaw": -0.6220437581429223,
          "pitch": 0.06102198027006622,
          "rotation": 0,
          "target": "12-cocina"
        },
        {
          "yaw": -1.065338640986031,
          "pitch": -0.4043557572349581,
          "rotation": 0,
          "target": "22-ingreso-pa-"
        },
        {
          "yaw": -0.9421542471651954,
          "pitch": 0.04127958516335539,
          "rotation": 4.71238898038469,
          "target": "14-acceso"
        },
        {
          "yaw": 2.520429937008471,
          "pitch": 0.40067599223371886,
          "rotation": 0,
          "target": "1-ingreso-a-propiedad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sala-de-estar",
      "name": "Sala de estar",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.17925762151871183,
        "pitch": 0.09968440631084974,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.442245220706944,
          "pitch": 0.2722626355900619,
          "rotation": 0,
          "target": "5-parque"
        },
        {
          "yaw": -2.459947227180294,
          "pitch": 0.1744358643426196,
          "rotation": 0,
          "target": "9-ingreso-pb"
        },
        {
          "yaw": -1.3321416254220466,
          "pitch": 0.20867130567138048,
          "rotation": 0,
          "target": "11-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-comedor",
      "name": "Comedor",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7082915815442092,
          "pitch": 0.1489579841801394,
          "rotation": 0,
          "target": "10-sala-de-estar"
        },
        {
          "yaw": 2.7521639323685685,
          "pitch": 0.3779519313883988,
          "rotation": 0,
          "target": "8-jardn-de-invierno-"
        },
        {
          "yaw": 1.0287549282793513,
          "pitch": 0.1292886096655792,
          "rotation": 0,
          "target": "12-cocina"
        },
        {
          "yaw": 0.37315314255666365,
          "pitch": 0.08377468607665506,
          "rotation": 0,
          "target": "14-acceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cocina",
      "name": "Cocina",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.865494724681694,
        "pitch": 0.2111561933126307,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.6202889855384388,
          "pitch": 0.2671705807412277,
          "rotation": 0,
          "target": "11-comedor"
        },
        {
          "yaw": 0.24875960316797752,
          "pitch": 0.17828108428599343,
          "rotation": 0,
          "target": "14-acceso"
        },
        {
          "yaw": -0.7836715466109183,
          "pitch": 0.0736238905801514,
          "rotation": 0,
          "target": "9-ingreso-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-toilette-",
      "name": "Toilette ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8972594815514263,
          "pitch": 0.0974066209175195,
          "rotation": 0,
          "target": "14-acceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-acceso",
      "name": "acceso",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8993451620737947,
          "pitch": 0.22531889202921818,
          "rotation": 0,
          "target": "12-cocina"
        },
        {
          "yaw": -2.422610954915367,
          "pitch": 0.14345879307903076,
          "rotation": 0,
          "target": "11-comedor"
        },
        {
          "yaw": -0.7883175695773303,
          "pitch": 0.05965446847683609,
          "rotation": 0,
          "target": "13-toilette-"
        },
        {
          "yaw": 1.2759960472345444,
          "pitch": 0.17151755076470465,
          "rotation": 0,
          "target": "15-cuarto-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-cuarto-pb",
      "name": "Cuarto PB",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.29919930034189335,
        "pitch": 0.25634403026397834,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.42882733981172905,
          "pitch": 0.1381278145596081,
          "rotation": 0,
          "target": "16-bao-pb"
        },
        {
          "yaw": -2.5044794853375016,
          "pitch": 0.1734705292247707,
          "rotation": 0,
          "target": "14-acceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bao-pb",
      "name": "Baño PB",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7248459240425387,
        "pitch": 0.44985864134561737,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.5863371976655127,
          "pitch": 0.10488386478039402,
          "rotation": 0,
          "target": "15-cuarto-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-cuarto-pa",
      "name": "Cuarto PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.12288723766103082,
        "pitch": 0.22367273228915607,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.3190984144360236,
          "pitch": 0.1495039582981832,
          "rotation": 0,
          "target": "23-pasillo-pa"
        },
        {
          "yaw": -2.864304357661309,
          "pitch": 0.1396012476094768,
          "rotation": 0,
          "target": "18-antebao-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-antebao-pa",
      "name": "Antebaño PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.24935245321513122,
        "pitch": 0.3343081174461844,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.2187322058109142,
          "pitch": 0.056938575688175064,
          "rotation": 0,
          "target": "17-cuarto-pa"
        },
        {
          "yaw": 2.4969668713786213,
          "pitch": 0.1077959549612082,
          "rotation": 0,
          "target": "19-bao-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bao-pa",
      "name": "Baño PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3988857483527042,
        "pitch": 0.6209997350150935,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.0450035526437436,
          "pitch": 0.1131337909717125,
          "rotation": 0,
          "target": "18-antebao-pa"
        },
        {
          "yaw": 1.9289926147158774,
          "pitch": 0.16124151336372883,
          "rotation": 0,
          "target": "20-antebao-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-antebao-pa",
      "name": "Antebaño PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9101738876109646,
          "pitch": 0.06115524056988697,
          "rotation": 0,
          "target": "19-bao-pa"
        },
        {
          "yaw": 2.6912982133868404,
          "pitch": 0.025534706029841203,
          "rotation": 0,
          "target": "21-cuarto-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-cuarto-pa",
      "name": "Cuarto PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.11576163406084561,
        "pitch": 0.14576425250305292,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.256872405685554,
          "pitch": 0.15546517478941269,
          "rotation": 0,
          "target": "20-antebao-pa"
        },
        {
          "yaw": -0.9902072082743327,
          "pitch": 0.08544137519439943,
          "rotation": 0,
          "target": "22-ingreso-pa-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-ingreso-pa-",
      "name": "Ingreso PA ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.16384980612691358,
        "pitch": 0.5981396975775368,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.46705008138196824,
          "pitch": 0.556374199962935,
          "rotation": 3.141592653589793,
          "target": "9-ingreso-pb"
        },
        {
          "yaw": -0.9946247966782131,
          "pitch": 0.064606343162529,
          "rotation": 0,
          "target": "17-cuarto-pa"
        },
        {
          "yaw": -1.344133768565687,
          "pitch": 0.08455954971681479,
          "rotation": 0,
          "target": "23-pasillo-pa"
        },
        {
          "yaw": 2.8974221526980166,
          "pitch": 0.3227298410990649,
          "rotation": 0,
          "target": "21-cuarto-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-pasillo-pa",
      "name": "Pasillo PA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14334756636763046,
          "pitch": 0.0843475182840514,
          "rotation": 0,
          "target": "17-cuarto-pa"
        },
        {
          "yaw": 0.9278406545654256,
          "pitch": 0.4644794584347238,
          "rotation": 3.141592653589793,
          "target": "9-ingreso-pb"
        },
        {
          "yaw": 3.0809324623668974,
          "pitch": 0.14518121927970817,
          "rotation": 0,
          "target": "21-cuarto-pa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
