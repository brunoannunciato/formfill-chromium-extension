import React from 'react'
import Button from '../../components/Button'

const Home = () => (
  <main className="home">
    <div className="container">
      <div className="profile-list">
        <div className="profile-list__header">
          <h2 className="profile-list__title">
            Profiles:
          </h2>

          <Button
            title="New profile"
          />
        </div>
      </div>
    </div>
  </main>
)

export default Home