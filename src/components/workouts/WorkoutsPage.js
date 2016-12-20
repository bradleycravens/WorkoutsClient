import React from 'react'
import { connect } from 'react-redux'
import WorkoutsList from './WorkoutsList'
import { getWorkouts } from '../../actions/workoutActions'

class WorkoutsPage extends React.Component {
  componentDidMount() {
    this.props.getWorkouts()
  }
  render() {
    return (
      <div>
        <h1>Workouts</h1>

        <WorkoutsList workouts={this.props.workouts} />
      </div>
    )
  }
}

WorkoutsPage.propTypes = {
  workouts: React.PropTypes.array.isRequired,
  getWorkouts: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps, { getWorkouts })(WorkoutsPage)