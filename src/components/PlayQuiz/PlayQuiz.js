import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

class PlayQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      quiz: {},
      authorized: false,
      answers: [],
      activeQuestionIdx: 0,
      percentage: 0,
    };
  }

  componentDidMount() {
    this.setState({ authorized: true })
    console.log(this.state.playerName);
    this.setState({
      quiz: this.props.location.state.quiz,
      answers: Array(this.props.location.state.quiz.questions.length).fill(0),
    });
    // console.log(this.state.quiz);
  }

  render() {
    let { quiz, activeQuestionIdx } = this.state;

    return (
      <>
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-600">
          <div class="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-5 text-lg">{quiz.questions[activeQuestionIdx].questionName}</h5>
            <ul class="grid w-full gap-6 md:grid-cols-2">
              <li>
                <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-green-500 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                  Mantap
                </label>
              </li>
              <li>
                <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer" />
                <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-red-500 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                  Keren
                </label>
              </li>
              <li>
                <input type="radio" id="hosting-3" name="hosting" value="hosting-3" class="hidden peer" />
                <label for="hosting-3" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-red-500 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                  Keren
                </label>
              </li>
              <li>
                <input type="radio" id="hosting-4" name="hosting" value="hosting-4" class="hidden peer" />
                <label for="hosting-4" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-red-500 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                  Keren
                </label>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

PlayQuiz.propTypes = {};

export default PlayQuiz;
