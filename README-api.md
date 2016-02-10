FORMAT: 1A
HOST: http://npm.advisory.com:3100/

# Form Builder API

Form Builder API is a simple API to power CRUD operations for saving and retrieving form descriptors in JSON.

 
## Forms Collection [/forms]

### List All Forms [GET]

+ Response 200 (application/json)

        [
          {
            "_id": "560fa226df28722462949056",
            "name": "Form Name",
            "__v": 0,
            "_inherits": [],
            "sections": [
              {
                "_id": "560fa226df28722462949057",
                "title": "Section",
                "description": "Section description",
                "__v": 0,
                "_inherits": [],
                "questions": [
                  {
                    "_id": "560fa226df28722462949058",
                    "field": "patient_email",
                    "label": "Email Address",
                    "value": null,
                    "type": "email",
                    "hidden": false,
                    "placeholder": "someone@email.com",
                    "validation": {
                      "required": true,
                      "datatype": "email",
                      "minlength": 5,
                      "maxlength": 50,
                      "error_message": "Please enter a valid email address."
                    },
                    "help_info": "Help info...",
                    "__v": 0,
                    "options": null,
                    "_inherits": []
                  }
                ],
              }
            ]
          }
        ]

### Create a New Form [POST]

+ Request (application/json)

        {
           "form":{
              "name":"Form Name",
              "sections":[
                 {
                    "title":"Section Title",
                    "description":"Section description",
                    "questions":[
                       {
                          "field":"patient_email",
                          "label":"Email Address",
                          "value":null,
                          "type":"email",
                          "hidden":false,
                          "placeholder":"someone@email.com",
                          "validation":{
                             "required":true,
                             "datatype":"email",
                             "minlength":5,
                             "maxlength":50,
                             "error_message":"Please enter a valid email address."
                          },
                          "help_info":"If you do not have an email address...",
                          "options":null,
                          "required":true
                       }
                    ]
                 }
              ]
           }
        }

+ Response 201 (application/json)

    + Headers

            Location: /forms/560f22802f7e761f69e9b8c1

    + Body

                {
                  "_id": "560f22802f7e761f69e9b8c1",
                  "name":"Form Name",
                  "sections":[
                     {
                        "_id": "560f2234534f69e9b834",
                        "title":"Section Title",
                        "description":"Section description",
                        "questions":[
                           {
                              "_id": "560f2234534f69e456",
                              "field":"patient_email",
                              "label":"Email Address",
                              "value":null,
                              "type":"email",
                              "hidden":false,
                              "placeholder":"someone@email.com",
                              "validation":{
                                 "required":true,
                                 "datatype":"email",
                                 "minlength":5,
                                 "maxlength":50,
                                 "error_message":"Please enter a valid email address."
                              },
                              "help_info":"If you do not have an email address...",
                              "options":null,
                              "required":true
                           }
                        ]
                     }
                  ]
                }

## Single Form [/forms/{form}]

### Get a Form [GET]

+ Response 200 (application/json)

            {
             "_id": "560fa226df28722462949057",
              "name":"Form Name",
              "_inherits": [],
              "sections":[
                 {
                    "_id": "560fa226df28722462949022",
                    "title":"Section Title",
                    "description":"Section description",
                    "_inherits": [],
                    "questions":[
                       {
                          "_id": "560fa226df287224629490520",
                          "field":"patient_email",
                          "label":"Email Address",
                          "value":null,
                          "type":"email",
                          "hidden":false,
                          "placeholder":"someone@email.com",
                          "validation":{
                             "required":true,
                             "datatype":"email",
                             "minlength":5,
                             "maxlength":50,
                             "error_message":"Please enter a valid email address."
                          },
                          "help_info":"If you do not have an email address...",
                          "options":null,
                          "required":true
                       }
                    ]
                 }
              ]
           }

### Update a Form [PUT]

+ Request (application/json)

        {
           "form":{
              "name":"Form Name",
              "sections":[
                 {
                    "title":"Section Title",
                    "description":"Section description",
                    "questions":[
                       {
                          "field":"patient_email",
                          "label":"Email Address",
                          "value":null,
                          "type":"email",
                          "hidden":false,
                          "placeholder":"someone@email.com",
                          "validation":{
                             "required":true,
                             "datatype":"email",
                             "minlength":5,
                             "maxlength":50,
                             "error_message":"Please enter a valid email address."
                          },
                          "help_info":"If you do not have an email address...",
                          "options":null,
                          "required":true
                       }
                    ]
                 }
              ]
           }
        }

+ Response 200 (application/json)

            {
              "_id": "560fa226df28722462949057",
              "name":"Form Name",
              "sections":[
                 {
                    "_id": "560fa23346294905233",
                    "title":"Section Title",
                    "description":"Section description",
                    "questions":[
                       {
                          "_id": "560fa226df2872246293000",
                          "field":"patient_email",
                          "label":"Email Address",
                          "value":null,
                          "type":"email",
                          "hidden":false,
                          "placeholder":"someone@email.com",
                          "validation":{
                             "required":true,
                             "datatype":"email",
                             "minlength":5,
                             "maxlength":50,
                             "error_message":"Please enter a valid email address."
                          },
                          "help_info":"If you do not have an email address...",
                          "options":null,
                          "required":true
                       }
                    ]
                 }
              ]
           }

### Delete a Form [DELETE]


+ Response 201 (application/json)

    + Body

            {
              "message": "Form Successfully Deleted"
            }

## Sections Collection [/sections]

### List All Sections [GET]

+ Response 200 (application/json)

        [
            {
                "_id": "560fa226df28722462949057",
                "_inherits": [],
                "title": "Section Title",
                "description": "Section description",
                "__v": 0,
                "questions": [
                  {
                    "_id": "560fa226df28722462949058",
                    "field": "patient_email",
                    "label": "Email Address",
                    "value": null,
                    "type": "email",
                    "hidden": false,
                    "placeholder": "someone@email.com",
                    "validation": {
                      "required": true,
                      "datatype": "email",
                      "minlength": 5,
                      "maxlength": 50,
                      "error_message": "Please enter a valid email address."
                    },
                    "help_info": "Some help information here ...",
                    "__v": 0,
                    "options": null,
                    "_inherits": []
                  }
                ]
            }
        ]

### Create a New Section [POST]

+ Request (application/json)

        {
            "section": {
                "title": "Section Title",
                "description": "Section description",
                "__v": 0,
                "questions": [
                  {
                    "field": "patient_email",
                    "label": "Email Address",
                    "value": null,
                    "type": "email",
                    "hidden": false,
                    "placeholder": "someone@email.com",
                    "validation": {
                      "required": true,
                      "datatype": "email",
                      "minlength": 5,
                      "maxlength": 50,
                      "error_message": "Please enter a valid email address."
                    },
                    "help_info": "Some help information here ...",
                    "__v": 0,
                    "options": null,
                    "_inherits": []
                  }
                ]
            }
        }

+ Response 201 (application/json)

    + Headers

            Location: /sections/560f22802f7e761f69e9b8c1

    + Body

            {
                "_id": "560f22802f7e761f69e9b8c1",
                "title": "Section Title",
                "description": "Section description",
                "__v": 0,
                "questions": [
                  {
                    "_id": "560fa226df28722462949058",
                    "field": "patient_email",
                    "label": "Email Address",
                    "value": null,
                    "type": "email",
                    "hidden": false,
                    "placeholder": "someone@email.com",
                    "validation": {
                      "required": true,
                      "datatype": "email",
                      "minlength": 5,
                      "maxlength": 50,
                      "error_message": "Please enter a valid email address."
                    },
                    "help_info": "Some help information here ...",
                    "__v": 0,
                    "options": null,
                    "_inherits": []
                  }
                ]
            }

## Single Section [/sections/{section}]

### Get a Section [GET]

+ Response 200 (application/json)

            {
                "_id": "560f22802f7e761f69e9b8c1",
                "title": "Section Title",
                "description": "Section description",
                "__v": 0,
                "questions": [
                  {
                    "_id": "560fa226df28722462949058",
                    "field": "patient_email",
                    "label": "Email Address",
                    "value": null,
                    "type": "email",
                    "hidden": false,
                    "placeholder": "someone@email.com",
                    "validation": {
                      "required": true,
                      "datatype": "email",
                      "minlength": 5,
                      "maxlength": 50,
                      "error_message": "Please enter a valid email address."
                    },
                    "help_info": "Some help information here ...",
                    "__v": 0,
                    "options": null,
                    "_inherits": []
                  }
                ]
            }

### Update a Section [PUT]

+ Request (application/json)

        {
            "section": {
                "_id": "560fa226df28722462949057",
                "title": "Section Title",
                "description": "Section description",
                "__v": 0,
                "questions": [
                  {
                    "_id": "560fa226df28722462949058",
                    "field": "patient_email",
                    "label": "Email Address",
                    "value": null,
                    "type": "email",
                    "hidden": false,
                    "placeholder": "someone@email.com",
                    "validation": {
                      "required": true,
                      "datatype": "email",
                      "minlength": 5,
                      "maxlength": 50,
                      "error_message": "Please enter a valid email address."
                    },
                    "help_info": "Some help information here ...",
                    "__v": 0,
                    "options": null,
                    "_inherits": []
                  }
                ]
            }
        }

+ Response 200 (application/json)

         {
                "_id": "560fa226df28722462949057",
                "title": "Section Title",
                "description": "Section description",
                "__v": 0,
                "questions": [
                  {
                    "_id": "560fa226df28722462949058",
                    "field": "patient_email",
                    "label": "Email Address",
                    "value": null,
                    "type": "email",
                    "hidden": false,
                    "placeholder": "someone@email.com",
                    "validation": {
                      "required": true,
                      "datatype": "email",
                      "minlength": 5,
                      "maxlength": 50,
                      "error_message": "Please enter a valid email address."
                    },
                    "help_info": "Some help information here ...",
                    "__v": 0,
                    "options": null,
                    "_inherits": []
                  }
                ]
            }

### Delete a Section [DELETE]

+ Response 201 (application/json)

    + Body

            {
              "message": "Section successfully deleted"
            }

## Questions Collection [/questions]

### List All Questions [GET]

+ Response 200 (application/json)

        [
          {
            "_id": "560fa226df28722462949058",
            "field": "patient_email",
            "label": "Email Address",
            "value": null,
            "type": "email",
            "hidden": false,
            "placeholder": "someone@email.com",
            "validation": {
              "required": true,
              "datatype": "email",
              "minlength": 5,
              "maxlength": 50,
              "error_message": "Please enter a valid email address."
            },
            "help_info": "Help information...",
            "__v": 0,
            "options": null,
            "_inherits": []
          }
        ]

### Create a New Question [POST]

+ Request (application/json)

        {
            "question": {
              "placeholder": "name@email.com",
              "label": "Email Address",
              "placeholder": "name@email.com",
              "type": "email",
              "hidden": false,
              "help_info": "Some help info",
              "_inherits": [
                "560ca02c7659c1dcaf039605"
              ]
            }
        }

+ Response 201 (application/json)

    + Headers

            Location: /questions/560f22802f7e761f69e9b8c1

    + Body

            {
              "_id": "560f22802f7e761f69e9b8c1",
              "placeholder": "name@email.com",
              "label": "Email Address",
              "placeholder": "name@email.com",
              "type": "email",
              "hidden": false,
              "help_info": "Some help info",
               "_inherits": ["560ca02c7659c1dcaf039605"]
            }

## Single Question [/questions/{question}]

### Get a Question [GET]

+ Response 200 (application/json)

        [
          {
            "_id": "560fa226df28722462949058",
            "field": "patient_email",
            "label": "Email Address",
            "value": null,
            "type": "email",
            "hidden": false,
            "placeholder": "someone@email.com",
            "validation": {
              "required": true,
              "datatype": "email",
              "minlength": 5,
              "maxlength": 50,
              "error_message": "Please enter a valid email address."
            },
            "help_info": "Help information...",
            "__v": 0,
            "options": null,
            "_inherits": []
          }
        ]
 
### Update a Question [PUT]

+ Request (application/json)

        {
            "question": {
              "placeholder": "name@email.com",
              "label": "Email Address",
              "placeholder": "name@email.com",
              "type": "email",
              "hidden": false,
              "help_info": "Some help info",
              "_inherits": [
                "560ca02c7659c1dcaf039605"
              ]
            }
        }

+ Response 200 (application/json)

        {
          "placeholder": "name@email.com",
          "label": "Email Address",
          "placeholder": "name@email.com",
          "type": "email",
          "hidden": false,
          "help_info": "Some help info",
          "_inherits": [
            "560ca02c7659c1dcaf039605"
          ]
        }

### Delete a Question [DELETE]

+ Response 201 (application/json)

    + Body

            {
              "message": "Question successfully deleted"
            }