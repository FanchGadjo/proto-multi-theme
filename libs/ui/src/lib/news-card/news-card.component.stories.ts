import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NewsCardComponent } from './news-card.component';

export default {
  title: 'NewsCardComponent',
  component: NewsCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<NewsCardComponent>;

const Template: Story<NewsCardComponent> = (args: NewsCardComponent) => ({
  component: NewsCardComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    title:  'titre primaire',
}

export const Sec = Template.bind({});
Sec.args = {
    title:  'titre secondaire',
}
