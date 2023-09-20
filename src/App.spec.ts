import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import AppVue from './App.vue';

describe('App.vue', () => {
  it('TODO', () => {
    const w = mount(AppVue)

    expect(w.text()).toBe('TODO')
  })
})