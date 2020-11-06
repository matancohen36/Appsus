export default {
    name: 'color-picker',
    template:
        `<div class="note-colors">
            <i v-for="color in colors" :key="color" @click="changeNoteColor(color)" class="fas fa-circle" :style="{color: color}"></i>
        </div>`,
    data() {
        return {
            colors: [
                '#fff475',
                '#fbbc04',
                '#f28b82',
                '#aecbfa',
                '#cbf0f8',
                '#a7ffeb',
                '#ccff90',
                '#e8eaed',
                '#e6c9a8',
                '#d7aefb',
                '#b356ac',
                '#c1be48']
        }
    },
    methods: {
        changeNoteColor(color) {
            this.$emit('changeColor', color);
        },
    }
}