import { CurrencyValue } from './money.model' 
import { FilesValue } from './files.model'
import { MarketerInfoValue } from './marketer.model'

export interface TaskInfo {
  title: string
  description: string
  budget: CurrencyValue 
  platforms: string
  filesIds: string
}

export interface TaskPublicInfo {
  id: string
  addedTime: string
  title: string
  description: string
  budget: CurrencyValue
  proposalCount: number
  platforms: Array<string>
  proposalAlreadySent: boolean
  addedByMe: boolean
  hasContractCreated: boolean
  hasContractAccepted: boolean
  files: Array<FilesValue>
  marketerInfo: MarketerInfoValue   
}
 