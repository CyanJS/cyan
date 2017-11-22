import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUser, updateUser } from '../../actions/User'


class FormEditUser extends Component {
  constructor(props) {
    super(props)

    this.formFields = { username: '' }
    this.formSubmit = this.formSubmit.bind(this)
    this.form = this.form.bind(this)
  }

  componentWillMount () {
    const { loadUser } = this.props

    loadUser()
  }

  formSubmit (e) {
    e.preventDefault()
    const { updateUser } = this.props
    const { username } = this.formFields

    updateUser({username: username.value})
  }

  form () {
    const { user } = this.props

    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username:
            <input 
              type="text"
              defaultValue={user.payload.username}
              ref={input => this.formFields.username = input} />
          </label>
        </div>
        <div>
          <input type="submit" value="Update" />
        </div>
      </form>
    )
  }

  loading () {
    return (
      <div> Loading... </div>
    )
  }

  render () {
    const { user } = this.props
    
    const body = (user.fetching) 
      ? this.loading()
      : this.form()

    return (
      <div>
        {body}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { loadUser, updateUser },
  dispatch
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormEditUser)
