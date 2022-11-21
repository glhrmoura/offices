import Vue from 'vue';

import Vuelidate from 'vuelidate';
import { VueMaskDirective } from 'v-mask';

import SmoothReflow from '@/components/SmoothReflow';

// Directives
Vue.directive('mask', VueMaskDirective);

// Plugins
Vue.use(Vuelidate);

// Components
Vue.component('smooth-reflow', SmoothReflow);
