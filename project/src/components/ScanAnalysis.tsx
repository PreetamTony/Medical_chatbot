import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

export function ScanAnalysis() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        // Placeholder for ML model analysis
        analyzeScan();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeScan = () => {
    // This is a placeholder for the actual ML model integration
    setAnalysis('Scan analysis in progress...');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Medical Scan Analysis</h2>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />
        
        {selectedImage ? (
          <div className="space-y-4">
            <img
              src={selectedImage}
              alt="Medical Scan"
              className="max-w-full h-auto mx-auto rounded-lg"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Upload Another Scan
            </button>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer space-y-4"
          >
            <div className="flex justify-center">
              <Upload className="w-12 h-12 text-gray-400" />
            </div>
            <div>
              <p className="text-lg font-medium">Upload Medical Scan</p>
              <p className="text-sm text-gray-500">
                Support for MRI, X-Ray, and CT scans
              </p>
            </div>
          </div>
        )}
      </div>

      {analysis && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Analysis Results:</h3>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}