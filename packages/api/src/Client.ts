
export interface ApiConfig {
  root: string
  headers?: Record<string, string>
}

export interface PredictionResult {
  data: any[]
  duration?: number
  average_duration?: number
  is_generating?: boolean
}

export class Client {
  private _root: string
  private _headers: Record<string, string>
  
  constructor(config: ApiConfig) {
    this._root = config.root.replace(/\/$/, '')
    this._headers = config.headers || {}
  }
  
  async predict(
    fnIndex: number | string, 
    data: any[], 
    eventData?: unknown
  ): Promise<PredictionResult> {
    const endpoint = typeof fnIndex === 'number' ? '/run/predict' : `/run/${fnIndex}`
    const url = `${this._root}${endpoint}`
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this._headers
        },
        body: JSON.stringify({
          data,
          event_data: eventData,
          fn_index: typeof fnIndex === 'number' ? fnIndex : undefined
        })
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Prediction failed:', error)
      throw error
    }
  }
  
  async upload(files: File[]): Promise<string[]> {
    const url = `${this._root}/upload`
    const formData = new FormData()
    
    files.forEach(file => {
      formData.append('files', file)
    })
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          ...this._headers
        },
        body: formData
      })
      
      if (!response.ok) {
        throw new Error(`Upload failed! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Upload failed:', error)
      throw error
    }
  }
}

export function connect(root: string, options: Omit<ApiConfig, 'root'> = {}): Client {
  return new Client({ root, ...options })
}
