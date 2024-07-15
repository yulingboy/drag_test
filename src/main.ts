import { createApp, defineComponent, h } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);
app.component(
  'demo-component',
  defineComponent(
    (props: { data: DragItemData }) => {
      return () =>
        h(
          'div',
          {
            style: {
              width: '100%',
              height: '100%',
              color: '#fff',
              backgroundColor: '#707eb1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '26px',
              fontWeight: '600',
            },
          },
          `${props.data.column}x${props.data.row}`
        );
    },
    {
      props: ['data'],
    }
  )
);

app.mount('#app');
