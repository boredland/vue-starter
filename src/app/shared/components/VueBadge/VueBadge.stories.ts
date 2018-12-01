import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueBadge from './VueBadge.vue';

const story = storiesOf('2. Components|Badge', module) as any;

story.add(
  'Badge Variants',
  withInfo({})(() => ({
    components: { VueBadge },
    template: `<div>
<vue-badge variant="primary">Primary</vue-badge>
<vue-badge variant="primary" outlined>Primary Outlined</vue-badge>
<br />
<br />
<vue-badge variant="secondary">Secondary</vue-badge>
<vue-badge variant="secondary" outlined>Secondary Outlined</vue-badge>
<br />
<br />
<vue-badge variant="tertiary">Tertiary</vue-badge>
<vue-badge variant="tertiary" outlined>Tertiary Outlined</vue-badge>
<br />
<br />
<vue-badge variant="danger">Danger</vue-badge>
<vue-badge variant="danger" outlined>Danger Outlined</vue-badge>
<br />
<br />
<vue-badge variant="warning">Warning</vue-badge>
<vue-badge variant="warning" outlined>Warning Outlined</vue-badge>
<br />
<br />
<vue-badge variant="success">Success</vue-badge>
<vue-badge variant="success" outlined>Success Outlined</vue-badge>
</div>`,
  })),
);
