'use client';

const medications = [
  { name: 'Donepezil', dosage: '10mg', schedule: 'Morning', status: 'Taken' },
  { name: 'Memantine', dosage: '20mg', schedule: 'Evening', status: 'Missed' },
  { name: 'Rivastigmine', dosage: '6mg', schedule: 'Afternoon', status: 'Taken' },
];

export default function Medications() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-poppins font-bold mb-6 text-blue-700 dark:text-violet-300 text-center">Medications</h1>
      <div className="flex flex-col gap-6">
        {medications.map((med, idx) => (
          <div key={idx} className="bg-white dark:bg-violet-900 rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between border border-blue-100 dark:border-violet-800">
            <div>
              <div className="font-poppins font-semibold text-lg text-blue-700 dark:text-violet-200">{med.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-300">{med.dosage} &middot; {med.schedule}</div>
            </div>
            <div className="mt-2 md:mt-0">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${med.status === 'Taken' ? 'bg-blue-100 text-blue-700 dark:bg-violet-700 dark:text-violet-100' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'}`}>{med.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 rounded-lg bg-blue-600 dark:bg-violet-700 text-white font-poppins font-semibold shadow hover:bg-blue-700 dark:hover:bg-violet-600 transition">Add Medication</button>
      </div>
    </div>
  );
} 