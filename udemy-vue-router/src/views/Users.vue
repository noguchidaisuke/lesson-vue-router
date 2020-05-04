<template>
  <div>
    <h3>Users</h3>
      <router-link to="/users/1">Users1</router-link>
      <router-link to="/users/2">Users2</router-link>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次の</router-link>
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link id="next-user" :to="{name: 'users-id-profile', params: { id: Number(id)+1 }, query: {lang: 'ja',page: 2}, hash}">次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"]
}
</script>