import React from 'react'
import Layout from '../components/layout'
import { getEvents } from '../http_service'

const EventsPage = ({ serverData }) => {

  if (serverData.error) {
    return <div>Something went wrong while getting event's list</div>
  }

  return (
    <Layout pageTitle="Events Page">
      <p>This is events page.</p>
      {serverData.data.map(item => {
        return <div key={item.id}>{item.displayName}</div>
      })}
    </Layout>
  )
}

export async function getServerData() {
  try {
    const data = await getEvents();

    return {
      props: data,
    }

  } catch (error) {
    return {
      props: { error: true, message: error }
    }

  }
}

export default EventsPage
