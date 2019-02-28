<template>
    <div id="app">
        <v-app light>
            <v-toolbar
                color="light-blue darken-2"
                dark
              >
                <v-toolbar-title v-text="title"></v-toolbar-title>

                <v-divider
                  class="mx-3"
                  inset
                  vertical
                ></v-divider>


                <v-spacer></v-spacer>

                <v-toolbar-items>
                    <v-divider vertical></v-divider>

                  <v-btn flat href="ruleta/index.html" target="_blank">
                    RULETA
                  </v-btn>

                  <v-divider vertical></v-divider>

                  <v-btn flat href="dado/index.html" target="_blank">
                    DADO
                  </v-btn>

                  <v-divider vertical></v-divider>

                </v-toolbar-items>
              </v-toolbar>

            <v-content>
                <section>
                    <v-parallax src="assets/pmkbg.jpg" height="350">
                        <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                        >
                            <img src="assets/logopmkw.png" alt="Vuetify.js" class="my-4" height="150">
                            <h1 class="white--text mb-2 display-1 text-xs-center">Pensamiento Estratégico</h1>
                        </v-layout>
                    </v-parallax>
                </section>
                <section>
                    <v-layout align-center justify-space-around fill-height my-5>
                    <v-flex xs4> <v-btn dark color="deep-orange darken-1" @click="addUser()">Agregar Nuevo Usuario</v-btn></v-flex>
                    <v-flex xs4>
                        <template>
                                <v-layout row justify-center>
                                    <v-dialog v-model="dialog2" fullscreen hide-overlay transition="dialog-bottom-transition">
                                        <v-btn slot="activator" @click="orderedUsers()" color="amber accent-4" dark>Tipos de Pensamiento</v-btn>
                                        <v-card>
                                            <v-toolbar dark color="amber accent-4">
                                                <v-btn icon dark @click="dialog2 = false">X</v-btn>
                                                <v-toolbar-title>Tipos de Pensamiento</v-toolbar-title>
                                                <v-spacer></v-spacer>
                                                <v-toolbar-items>
                                                    <v-btn dark flat @click="dialog2 = false">Cerrar</v-btn>
                                                </v-toolbar-items>
                                            </v-toolbar>
                                            <v-list two-line subheader>
                                                <v-subheader>Tipos de Pensamiento</v-subheader>
                                                <div  v-for="pensamiento in pensamientos">
                                                    <v-list-tile avatar>
                                                        <v-list-tile-content>
                                                            <v-combobox
                                                            hide-selected
                                                            v-model="pensamiento.select"
                                                            :items="users"
                                                            :label="pensamiento.pensamiento"
                                                            multiple
                                                            persistent-hint
                                                            small-chips
                                                            item-text="name"
                                                            item-value="id"
                                                            ></v-combobox>
                                                        </v-list-tile-content>
                                                    </v-list-tile>
                                                </div>
                                            </v-list>
                                            <v-divider></v-divider>
                                        </v-card>
                                    </v-dialog>
                                </v-layout>
                            </template>
                    </v-flex>
                    <v-flex xs4>
                        <section>
                    <template>
                        <v-layout row justify-center>
                            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                                <v-btn slot="activator" @click="orderedUsers()" color="light-blue darken-2" dark>Ver Ranking</v-btn>
                                <v-card>
                                    <v-toolbar dark color="light-blue darken-2">
                                        <v-btn icon dark @click="dialog = false">X</v-btn>
                                        <v-toolbar-title>Ranking</v-toolbar-title>
                                        <v-spacer></v-spacer>
                                        <v-toolbar-items>
                                            <v-btn dark flat @click="dialog = false">Cerrar</v-btn>
                                        </v-toolbar-items>
                                    </v-toolbar>
                                    <v-list two-line subheader>
                                        <v-subheader>Ranking Usuarios</v-subheader>
                                        <div  v-for="rank in ranking">
                                            <v-list-tile avatar>
                                                <v-list-tile-content>
                                                    <v-list-tile-title>{{ rank.name }} - Puntos: {{ rank.score }}</v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </div>
                                    </v-list>
                                    <v-divider></v-divider>
                                </v-card>
                            </v-dialog>
                        </v-layout>
                    </template>
                </section>
                    </v-flex>
                    </v-layout>
                </section>

                <section>
                    <v-layout
                    row
                    wrap
                    px-5
                    mb-5

                    >
                                <v-flex xs6 v-for="(user, index) in users">
                                <v-layout
                                row
                                wrap
                                >
                                    <v-flex xs6 pa-1>
                                        <v-text-field
                                        label="Nombre Usuario"
                                        :value="user.name"
                                        v-model="user.name"
                                        solo
                                        ></v-text-field>
                                    </v-flex>
                                    
                                    <template  v-if="user.name == null || user.name == ''">
                                        <v-flex xs1 pa-1>
                                        <v-btn dark color="deep-orange darken-1" @click="removeSection(index)">Eliminar</v-btn>
                                        </v-flex>
                                    </template>

                                    <template v-else>
                                        <v-flex xs3 pa-1>
                                        <v-text-field
                                        label="Score"
                                        :value="user.score"
                                        solo
                                        v-model="user.score"

                                        ></v-text-field>
                                        </v-flex>
                                        <v-flex xs1 pa-1>
                                            <v-btn fab  small dark color="red" @click="user.score ++">+</v-btn>
                                        </v-flex>
                                        <v-flex xs1 pa-1>
                                            <v-btn fab dark small color="blue-grey lighten-2" :disabled="user.score == 0" @click="user.score --">-</v-btn>
                                        </v-flex>
                                    </template>
                                </v-layout>
                            </v-flex>
                    </v-layout>
                </section>

                
            </v-content>
        </v-app>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        search: null,
        select: [],
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        dialog2: false,
        notifications2: false,
        sound2: true,
        widgets2: false,
      title: 'Tablero de puntaje',
      ranking: [],
      pensamientos: [
            { pensamiento: 'Pensamiento reflexivo',
            select: [] },
            { pensamiento: 'Pensamiento analítico',
            select: [] },
            { pensamiento: 'Pensamiento lógico',
            select: [] },
            { pensamiento: 'Pensamiento crítico',
            select: [] },
            { pensamiento: 'Pensamiento creativo',
            select: [] },
            { pensamiento: 'Pensamiento sistématico',
            select: [] },
            { pensamiento: 'Pensamiento analógico',
            select: [] },
            { pensamiento: 'Pensamiento deliberativo',
            select: [] },
            { pensamiento: 'Pensamiento práctico',
            select: [] }
      ],
      users: [
        {
            id: 1,
            name: 'Maria Del Pilar',
            score: 0
        },
        {
            id: 2,
            name: 'Yiseth Caicedo',
            score: 0
        },
        {
            id: 3,
            name: 'Julian Mantilla',
            score: 0
        },
        {
            id: 4,
            name: 'Sandra Herrera',
            score: 0
        },
        {
            id: 5,
            name: 'Manuel Salvador Perez',
            score: 0
        },
        {
            id: 6,
            name: 'Elizabeth Rodriguez',
            score: 0
        },
        {
            id: 7,
            name: 'Angelica Castro',
            score: 0
        },
        {
            id: 8,
            name: 'Karen Velasquez',
            score: 0
        },
        {
            id: 9,
            name: 'Angela Veloza',
            score: 0
        },
        {
            id: 10,
            name: 'Jacqueline Gallo',
            score: 0
        },
        {
            id: 11,
            name: 'Horacio Plata',
            score: 0
        },
        {
            id: 12,
            name: 'Cesar Zambrano',
            score: 0
        },
        {
            id: 13,
            name: 'Alejandro Roman',
            score: 0
        },
        {
            id: 14,
            name: 'Ricardo Monroy',
            score: 0
        },
        {
            id: 15,
            name: 'Kelly Martinez',
            score: 0
        },

      ],
      usersid: 16
    }
  },
  methods: {
    addUser: function () {
      this.users.push({
        id: this.usersid++,
        name: null,
        score: 0
      })
      this.newTodoText = ''
    },
    orderedUsers: function () {
        this.ranking = this.users;
    this.ranking.sort(function(a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
});
  },
  removeSection: function(index) {
      this.users.splice(index, 1)
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
