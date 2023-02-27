import React, { Component } from "react";
import Navbar from "../../partials/navbar";
import Sidebar from "../../partials/sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

class MyQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:9000/api/my-quiz").then((res) => {
      this.setState({
        quizzes: res.data,
      });
    });
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <div className="px-10 py-20 sm:ml-64">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">My Quiz</h1>
            <Link to="/my-quiz/create" className="inline-flex items-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
              </svg>
              Create New
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            {this.state.quizzes.map((quiz, idx) => (
              <div key={idx} className="w-1/5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#">
                  <img className="rounded-t-lg" src="" alt="" />
                </Link>
                <div className="p-5">
                  <Link to={quiz._id + "/edit"}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{quiz.quiz_name}</h5>
                  </Link>
                  <div class="flex items-center mt-2.5 mb-5">
                    <span class="bg-indigo-100 text-indigo-800 text-sm px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">{quiz.questions.length} Questions</span>
                  </div>
                  <Link to={"/quiz/" + quiz._id + "/play"} className="mt-3 inline-flex items-center text-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br hover:-translate-y-1 transition-transform focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5">
                    Play Quiz
                    <svg className="w-4 h-4 ml-2" fill="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

MyQuiz.propTypes = {};

export default MyQuiz;
