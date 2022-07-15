import { baseRequest } from './config.js'
import _get from 'lodash/get'

export const getEvents = async (offset = 0, limit = 50, total) => {
    const params = {
      offset,
      limit,
      compact: 'event-list',
    }
    
    //IF offset = 0 then dont send total, otherwise send total to avoid extra calculations in the backend
    if(offset !== 0) {
      params.total = total
    }

    const res = await baseRequest.get(`events/`, {
      params
    })

    return _get(res, 'data')
}