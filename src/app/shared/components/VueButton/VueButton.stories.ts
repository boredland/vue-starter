import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import VueButton from './VueButton.vue';

const story = storiesOf('2. Components|Button', module) as any;

story.add(
  'Button Variants',
  withInfo({})(() => ({
    components: { VueButton },
    template: `<div>
<vue-button @click="action" variant="primary">Primary</vue-button>
<vue-button @click="action" variant="primary" disabled>Primary Disabled</vue-button>
<vue-button @click="action" variant="primary" outlined>Primary Outlined</vue-button>
<vue-button @click="action" variant="primary" ghost>Primary Ghost</vue-button>
<vue-button @click="action" variant="primary" loading>Primary Loading</vue-button>
<br />
<br />
<vue-button @click="action" variant="secondary">Secondary</vue-button>
<vue-button @click="action" variant="secondary" disabled>Secondary Disabled</vue-button>
<vue-button @click="action" variant="secondary" outlined>Secondary Outlined</vue-button>
<vue-button @click="action" variant="secondary" ghost>Secondary Ghost</vue-button>
<vue-button @click="action" variant="secondary" loading>Secondary Loading</vue-button>
<br />
<br />
<vue-button @click="action" variant="tertiary">Tertiary</vue-button>
<vue-button @click="action" variant="tertiary" disabled>Tertiary Disabled</vue-button>
<vue-button @click="action" variant="tertiary" outlined>Tertiary Outlined</vue-button>
<vue-button @click="action" variant="tertiary" ghost>Tertiary Ghost</vue-button>
<vue-button @click="action" variant="tertiary" loading>Tertiary Loading</vue-button>
<br />
<br />
<vue-button @click="action" variant="danger">Danger</vue-button>
<vue-button @click="action" variant="danger" disabled>Danger Disabled</vue-button>
<vue-button @click="action" variant="danger" outlined>Danger Outlined</vue-button>
<vue-button @click="action" variant="danger" ghost>Danger Ghost</vue-button>
<vue-button @click="action" variant="danger" loading>Danger Loading</vue-button>
<br />
<br />
<vue-button @click="action" variant="warning">Warning</vue-button>
<vue-button @click="action" variant="warning" disabled>Warning Disabled</vue-button>
<vue-button @click="action" variant="warning" outlined>Warning Outlined</vue-button>
<vue-button @click="action" variant="warning" ghost>Warning Ghost</vue-button>
<vue-button @click="action" variant="warning" loading>Warning Loading</vue-button>
<br />
<br />
<vue-button @click="action" variant="success">Success</vue-button>
<vue-button @click="action" variant="success" disabled>Success Disabled</vue-button>
<vue-button @click="action" variant="success" outlined>Success Outlined</vue-button>
<vue-button @click="action" variant="success" ghost>Success Ghost</vue-button>
<vue-button @click="action" variant="success" loading>Success Loading</vue-button>
</div>
`,
    methods: {
      action: action('@onClick'),
    },
  })),
);
