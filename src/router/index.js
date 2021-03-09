import Vue from "vue";
import VueRouter from "vue-router";

import Teachers from "./../views/Teachers.vue";
import TeacherDetails from './../views/TeacherDetails.vue'
import TeacherContact from './../views/TeacherContact.vue'
import RegisterTeacher from './../views/RegisterTeacher.vue'
import Requests from './../views/Requests.vue'
import NotFound from './../views/NotFound.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/teachers" },
    { path: "/teachers", component: Teachers },
    {
      path: "/teachers/:id",
      component: TeacherDetails,
      children: [
        { path: "contact", component: TeacherContact }, //teachers/:id/contact
      ],
    },
    { path: "/register", component: RegisterTeacher },
    { path: "/requests", component: Requests },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
