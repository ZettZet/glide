import * as v from 'valibot'
import { createId } from './ids'

const TaskIdSchema = createId('task')

const ModuleSchema = v.picklist(['inter', 'strat'])

const SprintSchema = v.object({
  from: v.date(),
  to: v.date(),
  number: v.number(),
})

const TaskTypeSchema = v.picklist(['analysis', 'research', 'development'])
const DirectionSchema = v.picklist(['system'])

const TechStackSchema = v.picklist([
  'c#',
  'ts',
  'py',
  'design',
  'qa',
  'analysis',
])

const TeamMemberScheme = v.object({
  avatar: v.string(),
  name: v.string(),
  techStack: TechStackSchema,
  grade: v.number(), // TODO: grade
})

const ExecutorSchema = v.intersect([
  TeamMemberScheme,
  v.object({
    laborCost: v.number(),
    difficulty: v.number(),
  }),
])

const TaskExecutorsSchema = v.record(TechStackSchema, ExecutorSchema)

const CommentSchema = v.object({
  author: TeamMemberScheme,
  text: v.string(),
})

const TaskSchema = v.object({
  id: TaskIdSchema,
  mainName: v.string(),
  additionalName: v.optional(v.string()),
  module: ModuleSchema,
  direction: DirectionSchema,
  description: v.string(),
  sprint: SprintSchema,
  taskType: v.array(TaskTypeSchema),
  executors: TaskExecutorsSchema,
  comments: v.array(CommentSchema),
  priority: v.number(),
})

export type Task = v.InferInput<typeof TaskSchema>
export type TaskType = Task['taskType'][number]
export type TaskId = Task['id']
