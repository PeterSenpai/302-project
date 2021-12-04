import { render, screen } from '@testing-library/react';
import App from './App';
import { updateValueByLinkIdAndResponseType, extractItems } from './questionnaireParser';
import mockData from './mockQuestionnires.json';

const expected_questions = [
  {
    "linkId": "nameOfChild",
    "text": "Name of child",
    "type": "string",
    "responseType": "valueString"
  },
  {
    "linkId": "sex",
    "text": "Sex",
    "type": "choice",
    "answerOption": [
      {
        "valueCoding": {
          "code": "F"
        }
      },
      {
        "valueCoding": {
          "code": "M"
        }
      }
    ],
    "responseType": "valueCoding"
  },
  {
    "linkId": "birthWeight",
    "text": "Birth weight (kg)",
    "type": "decimal",
    "responseType": "valueDecimal"
  },
  {
    "linkId": "birthLength",
    "text": "Birth length (cm)",
    "type": "decimal",
    "responseType": "valueDecimal"
  },
  {
    "linkId": "vitaminKgiven",
    "text": "Vitamin K given",
    "type": "choice",
    "answerOption": [
      {
        "valueCoding": {
          "code": "INJECTION"
        }
      },
      {
        "valueCoding": {
          "code": "INTRAVENOUS"
        }
      },
      {
        "valueCoding": {
          "code": "ORAL"
        }
      }
    ],
    "item": [
      {
        "linkId": "vitaminKgivenDoses",
        "type": "group",
        "enableWhen": [
          {
            "question": "vitaminKgiven",
            "operator": "exists",
            "answerBoolean": true
          }
        ],
        "item": [
          {
            "linkId": "vitaminKDose1",
            "text": "1st dose",
            "type": "dateTime",
            "enableWhen": [
              {
                "question": "vitaminKgiven",
                "operator": "exists",
                "answerBoolean": true
              }
            ],
            "responseType": "valueDateTime"
          },
          {
            "linkId": "vitaminKDose2",
            "text": "2nd dose",
            "type": "dateTime",
            "enableWhen": [
              {
                "question": "vitaminKgiven",
                "operator": "exists",
                "answerBoolean": true
              }
            ],
            "responseType": "valueDateTime"
          },
          {
            "linkId": "vitaminKDose3ForTesting",
            "text": "3rd dose (for testing)",
            "type": "date",
            "enableWhen": [
              {
                "question": "vitaminKgiven",
                "operator": "exists",
                "answerBoolean": true
              }
            ],
            "responseType": "valueDate"
          },
          {
            "linkId": "vitaminKDose4ForTesting",
            "text": "4th dose (for testing)",
            "type": "time",
            "enableWhen": [
              {
                "question": "vitaminKgiven",
                "operator": "exists",
                "answerBoolean": true
              }
            ],
            "responseType": "valueTime"
          }
        ]
      }
    ],
    "responseType": "valueCoding"
  },
  {
    "linkId": "vitaminKDose1",
    "text": "1st dose",
    "type": "dateTime",
    "enableWhen": [
      {
        "question": "vitaminKgiven",
        "operator": "exists",
        "answerBoolean": true
      }
    ],
    "responseType": "valueDateTime"
  },
  {
    "linkId": "vitaminKDose2",
    "text": "2nd dose",
    "type": "dateTime",
    "enableWhen": [
      {
        "question": "vitaminKgiven",
        "operator": "exists",
        "answerBoolean": true
      }
    ],
    "responseType": "valueDateTime"
  },
  {
    "linkId": "vitaminKDose3ForTesting",
    "text": "3rd dose (for testing)",
    "type": "date",
    "enableWhen": [
      {
        "question": "vitaminKgiven",
        "operator": "exists",
        "answerBoolean": true
      }
    ],
    "responseType": "valueDate"
  },
  {
    "linkId": "vitaminKDose4ForTesting",
    "text": "4th dose (for testing)",
    "type": "time",
    "enableWhen": [
      {
        "question": "vitaminKgiven",
        "operator": "exists",
        "answerBoolean": true
      }
    ],
    "responseType": "valueTime"
  },
  {
    "linkId": "hepBgiven",
    "text": "Hep B given y / n",
    "type": "boolean",
    "item": [
      {
        "linkId": "hepBgivenDate",
        "text": "Date given",
        "type": "date",
        "responseType": "valueDate"
      }
    ],
    "responseType": "valueBoolean"
  },
  {
    "linkId": "hepBgivenDate",
    "text": "Date given",
    "type": "date",
    "responseType": "valueDate"
  },
  {
    "linkId": "abnormalitiesAtBirth",
    "text": "Abnormalities noted at birth",
    "type": "string",
    "responseType": "valueString"
  }
];

const expected_response = [
  {
    "item": [
      {
        "item": [
          {
            "linkId": "nameOfChild",
            "text": "Name of child",
            "answer": [
              {
                "valueString": ""
              }
            ]
          },
          {
            "linkId": "sex",
            "text": "Sex",
            "answer": [
              {
                "valueCoding": ""
              }
            ]
          }
        ],
        "linkId": "group"
      },
      {
        "item": [
          {
            "linkId": "birthWeight",
            "text": "Birth weight (kg)",
            "answer": [
              {
                "valueDecimal": ""
              }
            ]
          },
          {
            "linkId": "birthLength",
            "text": "Birth length (cm)",
            "answer": [
              {
                "valueDecimal": ""
              }
            ]
          },
          {
            "linkId": "vitaminKgiven",
            "text": "Vitamin K given",
            "answer": [
              {
                "valueCoding": "",
                "item": [
                  {
                    "item": [
                      {
                        "linkId": "vitaminKDose1",
                        "text": "1st dose",
                        "answer": [
                          {
                            "valueDateTime": ""
                          }
                        ]
                      },
                      {
                        "linkId": "vitaminKDose2",
                        "text": "2nd dose",
                        "answer": [
                          {
                            "valueDateTime": ""
                          }
                        ]
                      },
                      {
                        "linkId": "vitaminKDose3ForTesting",
                        "text": "3rd dose (for testing)",
                        "answer": [
                          {
                            "valueDate": ""
                          }
                        ]
                      },
                      {
                        "linkId": "vitaminKDose4ForTesting",
                        "text": "4th dose (for testing)",
                        "answer": [
                          {
                            "valueTime": ""
                          }
                        ]
                      }
                    ],
                    "linkId": "vitaminKgivenDoses"
                  }
                ]
              }
            ]
          },
          {
            "linkId": "hepBgiven",
            "text": "Hep B given y / n",
            "answer": [
              {
                "valueBoolean": "",
                "item": [
                  {
                    "linkId": "hepBgivenDate",
                    "text": "Date given",
                    "answer": [
                      {
                        "valueDate": ""
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "linkId": "abnormalitiesAtBirth",
            "text": "Abnormalities noted at birth",
            "answer": [
              {
                "valueString": ""
              }
            ]
          }
        ],
        "linkId": "neonatalInformation"
      }
    ],
    "linkId": "birthDetails"
  }
];

// This test is validating the acceptance criteria of feature 2
test('render logic is correct', () => {
  const questions = extractItems(mockData[1].item).questions;
  expect(questions).toEqual(expected_questions);
});

// This test is validating the acceptance criteria of feature 3
test('creating blank questionnaire response is correct', () => {
  const resp = extractItems(mockData[1].item).item;
  expect(resp).toEqual(expected_response);
});

// This test is validating the acceptance criteria of feature 3
test('updating string field in questionnaire response is correct', () => {
  let resp = extractItems(mockData[1].item).item;
  updateValueByLinkIdAndResponseType(resp, "abnormalitiesAtBirth", "valueString", "Test string");
  expect(resp[0].item[1].item[4].answer[0].valueString).toEqual("Test string");
});

// This test is validating the acceptance criteria of feature 3
test('updating decimal field in questionnaire response is correct', () => {
  let resp = extractItems(mockData[1].item).item;
  updateValueByLinkIdAndResponseType(resp, "birthWeight", "valueDecimal", 5);
  expect(resp[0].item[1].item[0].answer[0].valueDecimal).toEqual(5);
});

// This test is validating the acceptance criteria of feature 3
test('updating datetime field in questionnaire response is correct', () => {
  let resp = extractItems(mockData[1].item).item;
  updateValueByLinkIdAndResponseType(resp, "vitaminKDose1", "valueDateTime", "2021-12-18T00:08:28.142Z");
  expect(resp[0].item[1].item[2].answer[0].item[0].item[0].answer[0].valueDateTime).toEqual("2021-12-18T00:08:28.142Z");
});

// This test is validating the acceptance criteria of feature 3
test('updating coding field in questionnaire response is correct', () => {
  let resp = extractItems(mockData[1].item).item;
  updateValueByLinkIdAndResponseType(resp, "sex", "valueCoding", "F");
  expect(resp[0].item[0].item[1].answer[0].valueCoding.code).toEqual("F");
});

//The following tests (has question 1 through 8) are for the specific questionnaire used. If the questionnaire is changed, the tests will need to be commented and new ones will need to be written for the specific questions
// This test is validating the acceptance criteria of feature 2
test('has question 1', () => {
  console.log("========= Frontend: I am running a test! =========");
  render(<App />);
  const Element = screen.getByText(/Name of child/i);
  expect(Element).toBeInTheDocument();
});

// This test is validating the acceptance criteria of feature 2
test('has question 2', () => {
  render(<App />);
  const Element = screen.getByText(/Sex/i);
  expect(Element).toBeInTheDocument();
});

// This test is validating the acceptance criteria of feature 2
test('has question 3', () => {
  render(<App />);
  const Element = screen.getByText(/Birth weight \(kg\)/i);
  expect(Element).toBeInTheDocument();
});

// This test is validating the acceptance criteria of feature 2
test('has question 4', () => {
  render(<App />);
  const Element = screen.getByText(/Birth length \(cm\)/i);
  expect(Element).toBeInTheDocument();
});

// This test is validating the acceptance criteria of feature 2
test('has question 5', () => {
  render(<App />);
  const Element = screen.getByText(/Vitamin K given/i);
  expect(Element).toBeInTheDocument();
});

// This test is validating the acceptance criteria of feature 2
test('has question 6', () => {
  render(<App />);
  const Element = screen.getByText(/Hep B given y \/ n/i);
  expect(Element).toBeInTheDocument();
});

// This test is validating the acceptance criteria of feature 2
test('has question 7', () => {
  render(<App />);
  const Element = screen.getByText(/Date given/i);
  expect(Element).toBeInTheDocument();
});

// This test is validating the acceptance criteria of feature 2
test('has question 8', () => {
  render(<App />);
  const Element = screen.getByText(/Abnormalities noted at birth/i);
  expect(Element).toBeInTheDocument();
});