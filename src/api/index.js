import axios from './axios.config'

export function getWeightChart(){
    return axios.get('/api/debei/score/user/weight/lineChart.html', {
        params: {
            uuid: '2e9d356b-ee96-42f7-b6cd-a79c048fdc77',
            date: '2018-05-22'
        }
    })
}
export function postWeightChart(){
    return axios.post('/api/debei/score/user/weight/lineChart.html?uuid=2e9d356b-ee96-42f7-b6cd-a79c048fdc77&date=2018-05-22')
}
