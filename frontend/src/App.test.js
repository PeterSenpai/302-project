import { render, screen } from '@testing-library/react';
import App from './App';
import { updateValueByLinkIdAndResponseType, extractItems } from './questionnaireParser';
import mockData from './mockQuestionnires.json';

expected_questions = [
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
  }
];

expected_response = [
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
          }
        ],
        "linkId": "neonatalInformation"
      }
    ],
    "linkId": "birthDetails"
  }
]

test('render logic is correct', () => {
  const questions = extractItems(mockData[1]).question;
  expect(questions).toEqual(expected_questions);
});

test('creating blank questionnaire response is correct', () => {
  const resp = extractItems(mockData[1]).item;
  expect(resp).toEqual(expected_response);
});

// test('updating field in questionnaire response is correct', () => {

// });

//The following tests (has question 1 through 8) are for the specific questionnaire used. If the questionnaire is changed, the tests will need to be commented and new ones will need to be written for the specific questions
test('has question 1', () => {
  console.log(`========= Frontend: I am running a test! =========`);
  render(<App />);
  const Element = screen.getByText(/Name of child/i);
  expect(Element).toBeInTheDocument();
});

test('has question 2', () => {
  render(<App />);
  const Element = screen.getByText(/Sex/i);
  expect(Element).toBeInTheDocument();
});

test('has question 3', () => {
  render(<App />);
  const Element = screen.getByText(/Birth weight \(kg\)/i);
  expect(Element).toBeInTheDocument();
});

test('has question 4', () => {
  render(<App />);
  const Element = screen.getByText(/Birth length \(cm\)/i);
  expect(Element).toBeInTheDocument();
});

test('has question 5', () => {
  render(<App />);
  const Element = screen.getByText(/Vitamin K given/i);
  expect(Element).toBeInTheDocument();
});

test('has question 6', () => {
  render(<App />);
  const Element = screen.getByText(/Hep B given y \/ n/i);
  expect(Element).toBeInTheDocument();
});

test('has question 7', () => {
  render(<App />);
  const Element = screen.getByText(/Date given/i);
  expect(Element).toBeInTheDocument();
});

test('has question 8', () => {
  render(<App />);
  const Element = screen.getByText(/Abnormalities noted at birth/i);
  expect(Element).toBeInTheDocument();
});
