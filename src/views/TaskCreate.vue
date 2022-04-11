<template>
  <div class="task-create">
    <h1 class="page-title">Task Create view</h1>
    <div class="create-form">
      <Form v-slot="{ errors }" :validation-schema="schema" @submit="submitTask">
        <div class="form-row">
          <div class="form-group col-5">
            <label class="label">Title:</label>
            <Field
              v-model="task.title"
              name="title"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.title }"
            />
            <div class="invalid-feedback">{{ errors.title }}</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-5">
            <label class="label">Budget:</label>
            <Field
              v-model="task.budget.value"
              name="budget"
              type="text"
              class="form-control budget_value"
              :class="{ 'is-invalid': errors.budget }"
            />
            <Field
              v-model="task.budget.currency"
              name="currency"
              as="select"
              class="form-control budget_currency"
              :class="{ 'is-invalid': errors.currency }"
            >
              <option>{{ task.budget.currency }}</option>
            </Field>
            <div class="invalid-feedback">{{ errors.budget }}</div>
          </div>
        </div>
        <div class="form-group col">
          <label class="label">Platforms</label>
          <Field
            v-model="task.platforms"
            name="platforms"
            as="select"
            class="form-control platforms"
            :class="{ 'is-invalid': errors.platforms }"
          >
            <option
              v-for="socialPlatform in Object.keys(TaskSocialPlatform)"
              :key="socialPlatform"
              :value="socialPlatform"
            >
              {{ socialPlatform }}
            </option>
          </Field>
          <div class="invalid-feedback">{{ errors.platforms }}</div>
        </div>
        <div class="form-row">
          <div class="form-group col-5">
            <label class="label">FilesIds:</label>
            <Field
              v-model="task.filesIds"
              name="ids"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.ids }"
            />
            <div class="invalid-feedback">{{ errors.ids }}</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-5">
            <label class="label">Description:</label>
            <Field
              v-model="task.description"
              name="description"
              as="textarea"
              type="text"
              class="description"
              :class="{ 'is-invalid': errors.description }"
            />
            <div class="invalid-feedback">{{ errors.description }}</div>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="button">Add task</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTask from '@/components/task/task'
import { TaskSocialPlatform } from '@/types/platform.model'
import { Form, Field } from 'vee-validate'
import { schema } from '@/components/task/const'

export default defineComponent({
  name: 'TaskCreate',
  components: {
    Form,
    Field,
  },
  setup() {
    const { task, submitTask } = useTask()

    return {
      task,
      TaskSocialPlatform,
      submitTask,
      schema,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>
