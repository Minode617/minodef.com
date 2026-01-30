import React, { useState } from 'react';

export default function FloorPlan() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    // 左上: 洋室
    {
      id: 'youshitsu',
      name: '洋室',
      x: 20, y: 20,
      width: 70, height: 55,
      color: '#E8F5E9',
      info: { size: '約4.5畳', features: '増築部分' }
    },
    // 床の間
    {
      id: 'tokonoma',
      name: '床の間',
      x: 90, y: 20,
      width: 70, height: 25,
      color: '#FCE4EC',
      info: { size: '床の間', features: '和室装飾' }
    },
    // 和室2（左上）
    {
      id: 'washitsu2',
      name: '和室2',
      x: 90, y: 45,
      width: 70, height: 55,
      color: '#C8E6C9',
      info: { size: '8畳', features: '畳敷き' }
    },
    // 和室3（左下・一番奥）
    {
      id: 'washitsu3',
      name: '和室3',
      x: 90, y: 100,
      width: 70, height: 55,
      color: '#A5D6A7',
      info: { size: '8畳', features: '畳敷き' }
    },
    // トイレ
    {
      id: 'toilet',
      name: 'トイレ',
      x: 160, y: 20,
      width: 50, height: 25,
      color: '#E3F2FD',
      info: { size: '約1畳', features: '洋式トイレ' }
    },
    // 押入れ
    {
      id: 'oshiire',
      name: '押入',
      x: 160, y: 45,
      width: 50, height: 25,
      color: '#FFF3E0',
      info: { size: '収納', features: '布団収納' }
    },
    // 廊下（縦）
    {
      id: 'rouka_right',
      name: '廊下',
      x: 210, y: 20,
      width: 20, height: 50,
      color: '#ECEFF1',
      info: { size: '通路', features: '水回りへの通路' }
    },
    // 和室1（右下・玄関に一番近い）
    {
      id: 'washitsu1',
      name: '和室1',
      x: 160, y: 70,
      width: 70, height: 55,
      color: '#C8E6C9',
      info: { size: '8畳', features: '畳敷き' }
    },
    // 脱衣所
    {
      id: 'datsuijo',
      name: '脱衣所',
      x: 230, y: 20,
      width: 25, height: 30,
      color: '#E1F5FE',
      info: { size: '約0.75畳', features: '洗面台・洗濯機' }
    },
    // 風呂
    {
      id: 'furo',
      name: '風呂',
      x: 255, y: 20,
      width: 45, height: 30,
      color: '#81D4FA',
      info: { size: '浴室', features: 'ユニットバス' }
    },
    // キッチン
    {
      id: 'kitchen',
      name: 'キッチン',
      x: 230, y: 50,
      width: 70, height: 40,
      color: '#FFF9C4',
      info: { size: '約4畳', features: 'システムキッチン' }
    },
    // 玄関
    {
      id: 'genkan',
      name: '玄関',
      x: 230, y: 90,
      width: 35, height: 65,
      color: '#D7CCC8',
      info: { size: '約2畳', features: '土間' }
    },
    // 小物置き
    {
      id: 'komonooki',
      name: '小物置き',
      x: 265, y: 90,
      width: 35, height: 65,
      color: '#FFCC80',
      info: { size: '約2畳', features: 'パントリー' }
    },
    // 廊下（横）
    {
      id: 'rouka_yoko',
      name: '廊下',
      x: 160, y: 125,
      width: 70, height: 30,
      color: '#ECEFF1',
      info: { size: '通路', features: '横廊下' }
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-1 text-center">間取り図</h1>
        <p className="text-slate-500 text-center mb-4 text-sm">部屋をクリックして詳細表示</p>
        
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 flex-1 overflow-auto">
            <svg viewBox="0 0 330 180" className="w-full h-auto min-w-[330px]">
              <rect x="15" y="15" width="290" height="145" fill="none" stroke="#37474F" strokeWidth="4"/>
              
              {rooms.map((room) => (
                <g 
                  key={room.id} 
                  onClick={() => setSelectedRoom(selectedRoom?.id === room.id ? null : room)}
                  className="cursor-pointer"
                >
                  <rect
                    x={room.x}
                    y={room.y}
                    width={room.width}
                    height={room.height}
                    fill={room.color}
                    stroke={selectedRoom?.id === room.id ? '#1565C0' : '#546E7A'}
                    strokeWidth={selectedRoom?.id === room.id ? 3 : 1.5}
                    rx="1"
                    className="transition-all duration-200 hover:brightness-95"
                  />
                  <text
                    x={room.x + room.width / 2}
                    y={room.y + room.height / 2 + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={room.width < 25 ? "5" : room.width < 40 ? "7" : room.width < 55 ? "8" : "10"}
                    fontWeight="600"
                    fill="#37474F"
                  >
                    {room.name}
                  </text>
                </g>
              ))}
              
              <line x1="247" y1="155" x2="247" y2="165" stroke="#37474F" strokeWidth="2"/>
              <polygon points="247,168 243,162 251,162" fill="#37474F"/>
              
              <g transform="translate(290, 140)">
                <circle r="12" fill="white" stroke="#78909C" strokeWidth="1"/>
                <polygon points="0,-8 -2.5,-1 2.5,-1" fill="#E53935"/>
                <polygon points="0,8 -2.5,1 2.5,1" fill="#455A64"/>
                <text y="-2" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#E53935">N</text>
              </g>
            </svg>
          </div>

          <div className="lg:w-72 bg-white rounded-2xl shadow-xl p-5">
            {selectedRoom ? (
              <div key={selectedRoom.id}>
                <div className="h-2 rounded-full mb-4" style={{ backgroundColor: selectedRoom.color }}/>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{selectedRoom.name}</h2>
                <div className="space-y-3">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">広さ</p>
                    <p className="text-lg font-semibold text-slate-800">{selectedRoom.info.size}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">特徴</p>
                    <p className="font-medium text-slate-700">{selectedRoom.info.features}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedRoom(null)}
                  className="mt-4 w-full py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  閉じる
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🏠</div>
                <p className="text-slate-400">部屋をクリックすると<br/>詳細が表示されます</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl shadow-xl p-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { color: '#A5D6A7', label: '和室（8畳）' },
              { color: '#E8F5E9', label: '洋室' },
              { color: '#FCE4EC', label: '床の間' },
              { color: '#FFF9C4', label: 'キッチン' },
              { color: '#81D4FA', label: '水回り' },
              { color: '#FFF3E0', label: '収納' },
              { color: '#D7CCC8', label: '玄関' },
              { color: '#ECEFF1', label: '廊下' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded shadow-sm border border-slate-200" style={{ backgroundColor: item.color }}/>
                <span className="text-sm text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
