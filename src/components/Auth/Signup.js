import React from 'react'

export default function Signup() {
  return (
    <div className='container mx-auto'>
      <div className='form'>
        <div className='input-wrapper'>
          <div>Email Address</div>
          <input className='input' type='text' placeholder='Email address' value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
        </div>
        <div className='input-wrapper'>
          <div>Password</div>
          <input className='input' type='password' placeholder='••••••••' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
        </div>

        {/* <div className='btn' onClick={() => this.props.signIn(this.state.email, this.state.password), e => this.setState({ dialog: true })}>Sign In</div> */}
      </div>
    </div>
  )
}
