import request from 'supertest'
import app from '../../../app'
import {generateJWT} from '../../../utils/auth'
import db from '../../../models/db'
import {initMockDB, jobs, users} from '../../../mocks/dbObjects'
import dayjs = require('dayjs')

const userRoute = '/api/users'

const agent = request(app)

const [expiredJob1, job1] = jobs
const [user1, user2] = users

describe('UsersCtrlr', () => {
  beforeAll(async () => {
    await db.sync({force: true})
    await initMockDB()
  })
  afterAll(async () => await db.close())
  describe('editUser', () => {
    const userForm = {
      email: 'user1@mail.com',
      name: '修改了的张三',
      experience: 3,
      intro: '修改后的个人介绍',
      phone: '949123456',
      leetCodeUrl: 'http://leetcode/zhangshan',
      thirdPersonIntro: '修改后的第三人称',
    }

    it('成功修改 user-1 信息', async () => {
      const jwtToken = generateJWT(user1.userId)
      const {status, body} = await agent
        .put(userRoute)
        .send(userForm)
        .set('Authorization', jwtToken)

      expect(status).toEqual(200)
      expect(body.email).toEqual(userForm.email)
      expect(body.name).toEqual(userForm.name)
      expect(body.experience).toEqual(userForm.experience)
      expect(body.intro).toEqual(userForm.intro)
      expect(body.phone).toEqual(userForm.phone)
      expect(body.leetCodeUrl).toEqual(userForm.leetCodeUrl)
      expect(body.thirdPersonIntro).toEqual(userForm.thirdPersonIntro)

      expect(body.job).toBeUndefined()
    })
  })

  describe('getUser', () => {
    it('成功获取 user-1', async () => {
      const jwtToken = generateJWT(user1.userId)
      const {body} = await agent
        .get(userRoute)
        .set('Authorization', jwtToken)
      const {info, job} = body

      expect(info.userId).toEqual(user1.userId)
      expect(info.email).toEqual(user1.email)

      expect(job.jobId).toEqual(job1.jobId)
      expect(dayjs(job.deadline).isAfter(dayjs())).toBe(true)
    })
    it ('成功获取 user-2', async () => {
      const jwtToken = generateJWT(user2.userId)
      const {body} = await agent
        .get(userRoute)
        .set('Authorization', jwtToken)
      const {info, job} = body

      expect(info.userId).toEqual(user2.userId)
      expect(info.email).toEqual(user2.email)

      expect(job).not.toBeNull()
      expect(dayjs(job.deadline).isAfter(dayjs())).toBe(true)
    })
    it('没有 token 不能获取 user-1', async () => {
      const {status, body, text} = await agent
        .get(userRoute)

      expect(status).toEqual(401)
      expect(body).toStrictEqual({})
      expect(text).toEqual('Unauthorized')
    })
  })
})
