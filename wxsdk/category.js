const app = getApp(); import common from 'common.js'; var course_list_url = 'wxapp/category/list'; var subject_list_url = 'wxapp/category/subject'; var wxRequest = (params) => common.wxRequest(params, course_list_url); var wxSubRequest = (params) => common.wxRequest(params, subject_list_url); function getList(e) { var params = []; return new Promise(function (resolve) { wxRequest({ data: params, success: function (res) { if (res.data.code == 200 && res.data.data) { resolve(res.data) } else { resolve({ code: 0 }) } } }) }) } function getSubjectList(e) { var params = []; params.item_id = e.category_id; return new Promise(function (resolve) { wxSubRequest({ data: params, success: function (res) { if (res.data.code == 200 && res.data.data) { resolve(res.data) } else { resolve({ code: 0 }) } } }) }) } module.exports = { getList, getSubjectList }