import { getTutorialStructure } from '@/lib/tutorials'
import { Suspense } from 'react'
import ClientSideTutorialTree from './ClientSideTutorialTree'
import { ErrorBoundary } from '../components/ErrorBoundary'

export default async function Page({ params }: { params: { language: string } }) {
  const tutorials = await getTutorialStructure(params.language);
  const language = params.language;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{decodeURIComponent(language)} Tutorials</h1>
      <div className="bg-white shadow-md rounded p-6">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <ClientSideTutorialTree tutorials={tutorials} language={language} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
