import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueLoader from './VueLoader.vue';

const story = storiesOf('2. Components|Loader', module) as any;

story.add(
  'Loader Variants',
  withInfo({})(() => ({
    components: { VueLoader },
    template: `<div>
<vue-loader variant="primary" />
<vue-loader variant="primary" medium />
<vue-loader variant="primary" large />
<br />
<br />
<vue-loader variant="secondary" />
<vue-loader variant="secondary" medium />
<vue-loader variant="secondary" large />
<br />
<br />
<vue-loader variant="tertiary" />
<vue-loader variant="tertiary" medium />
<vue-loader variant="tertiary" large />
<br />
<br />
<vue-loader variant="danger" />
<vue-loader variant="danger" medium />
<vue-loader variant="danger" large />
<br />
<br />
<vue-loader variant="warning" />
<vue-loader variant="warning" medium />
<vue-loader variant="warning" large />
<br />
<br />
<vue-loader variant="success" />
<vue-loader variant="success" medium />
<vue-loader variant="success" large />
</div>`,
  })),
);
