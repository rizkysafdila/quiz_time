import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "../../Modal/Modal";
import Toast from "../../Toast/Toast";

class CreateQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // categories: ["Math", "Science", "Technology", "Sports", "History", "Misc"],
      // categoryVal: "Math",
      questions: [],
      quiz_name: "",
      addQuestion: false,
      editQuestion: false,
      questionName: "",
      answers: [],
      correctAnswer: "",
      questionPoints: 0,
      showToast: false,
    };
  }

  addAnswer = () => {
    this.setState({
      answers: this.state.answers.concat(""),
    });
  };

  updateAnswer = (e, i) => {
    let newArr = Object.assign([], this.state.answers);
    newArr[i] = e.target.value;
    this.setState({
      answers: newArr,
    });
  };

  saveQuestion = () => {
    let question = {
      answers: this.state.answers,
      correctAnswer: this.state.correctAnswer,
      questionName: this.state.questionName,
      question_points: this.state.questionPoints,
    };
    this.setState({
      questions: this.state.questions.concat(question),
      addQuestion: false,
      questionName: "",
      answers: [],
      correctAnswer: "",
      questionPoints: 0,
    });
  };

  updateQuestion = () => {
    let question = {
      answers: this.state.answers,
      correctAnswer: this.state.correctAnswer,
      questionName: this.state.questionName,
      question_points: this.state.questionPoints,
    };
    this.setState({
      questions: this.state.questions.concat(question),
      addQuestion: false,
      questionName: "",
      answers: [],
      correctAnswer: "",
      questionPoints: 0,
    });
  };

  removeQuestion = (question) => {
    this.setState({
      questions: this.state.questions.filter((ques) => ques.questionName !== question.questionName),
    });
  };

  saveQuiz = () => {
    let quiz = {
      quiz_name: this.state.quiz_name,
      questions: this.state.questions,
      // category: this.state.categoryVal
    };
    axios
      .post("http://127.0.0.1:9000/api/my-quiz/create", { quiz })
      .then((res) => {
        if (res.data.success) {
          this.setState({
            // questions: [],
            // answers: [],
            showToast: true,
          });
          setTimeout(() => {
            this.setState({ showToast: false });
          }, 2000);
        }
      })
      .catch((er) => {
        console.error(er);
      });
  };

  render() {
    return (
      <>
        <Toast model={this.state.showToast} message="Quiz Created" />

        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-start">
                <Link to="/my-quiz" class="inline-flex items-center text-gray-900 border-gray-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
                  <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                  </svg>
                  Back
                </Link>
              </div>
              <div class="flex items-center gap-1">
                <Link to={'/my-quiz'} class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Cancel</Link>
                <button type="button" onClick={() => this.saveQuiz()} class="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900">
                  Save Quiz
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="mx-10 mt-24 flex justify-end">
          <button type="button" onClick={() => this.setState({ addQuestion: true })} class="inline-flex items-center text-indigo-700 hover:text-white border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-indigo-400 dark:text-indigo-400 dark:hover:text-white dark:hover:bg-indigo-500 dark:focus:ring-indigo-900">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
            Add Question
          </button>
        </div>

        <div class="mx-10 mt-1 grid grid-cols-7 grid-flow-col gap-6">
          <div className="col-span-2">
            <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form class="space-y-6" action="#" method="post">
                <div class="flex items-center justify-center w-full">
                  <label for="images_cover" class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" class="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload image</span> or drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
                    </div>
                    <input id="images_cover" type="file" class="hidden" />
                  </label>
                </div>
                <div>
                  <label for="quiz_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Quiz Name*
                  </label>
                  <input type="text" onChange={(e) => this.setState({ quiz_name: e.target.value })} name="quiz_name" id="quiz_name" value={this.state.quiz_name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
              </form>
            </div>
          </div>

          <div className="col-span-5">
            <div className="flex flex-col gap-y-4">
              {this.state.questions.map((ques, idx) => (
                <div key={idx} class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex gap-3 justify-end items-center">
                    <div className="px-4 py-2 border-2 border-gray-200 rounded-md text-sm">10 Points</div>
                    <div className="px-4 py-2 border-2 border-gray-200 rounded-md text-sm">30 Seconds</div>
                    <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-yellow-400 transition-colors rounded-md text-sm">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                      </svg>
                      Edit
                    </button>
                    <button onClick={() => this.removeQuestion(ques)} className="inline-flex items-center px-4 py-2.5 bg-gray-200 hover:bg-red-700 transition-colors hover:text-white rounded-md">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                      </svg>
                    </button>
                  </div>
                  <h5 className="mt-4">{idx + 1 + ". " + ques.questionName}</h5>
                  <div className="mt-5 border-b-2"></div>
                  <div className="flex flex-wrap items-center mt-4 gap-y-2">
                    {ques.answers.map((ans, idx) => (
                      <div className="flex w-1/2 items-center">
                        <span className={ans === ques.correctAnswer ? "inline-flex items-center justify-center w-2.5 h-2.5 mr-2 text-xs bg-green-500 rounded-full" : "inline-flex items-center justify-center w-2.5 h-2.5 mr-2 text-xs bg-red-500 rounded-full"}></span>
                        {ans}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Modal model={this.state.addQuestion} modalTitle="Add Question">
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Add New Question</h3>
            <button onClick={() => this.setState({ addQuestion: false })} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-6 space-y-6">
            <textarea id="question_name" onChange={(e) => this.setState({ questionName: e.target.value })} value={this.state.questionName} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your question here..." autoFocus></textarea>
            <div>
              <label for="answers" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Answers
              </label>
              {this.state.answers.map((ans, idx) => (
                <div class="flex mb-4" key={idx}>
                  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <input type="radio" name="answer" value={this.state.ans} onChange={(e) => this.setState({ correctAnswer: ans })} class="w-4 h-4 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </span>
                  <input type="text" value={this.state.answers[idx]} onChange={(e) => this.updateAnswer(e, idx)} class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Answer " + (idx + 1)} autoFocus />
                </div>
              ))}
              <button type="button" onClick={this.addAnswer} class="inline-flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                </svg>
                Add Answer
              </button>
            </div>
          </div>
          <div class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button onClick={() => this.setState({ addQuestion: false })} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Cancel
            </button>
            <button type="button" onClick={this.saveQuestion} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Save Question
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

CreateQuiz.propTypes = {};

export default CreateQuiz;
