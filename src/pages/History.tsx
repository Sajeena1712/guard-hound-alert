import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Search, 
  Download, 
  Filter, 
  Clock, 
  MapPin, 
  Camera,
  Users,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const History = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const historyData = [
    {
      id: '001',
      timestamp: '2024-01-15 14:34:22',
      location: 'Main Gate - Block A',
      cameraId: 'CAM-001',
      dogCount: 3,
      severity: 'critical',
      status: 'resolved',
      aiConfidence: 98.5,
      responseTime: '2 min'
    },
    {
      id: '002',
      timestamp: '2024-01-15 13:22:18',
      location: 'Parking Zone B',
      cameraId: 'CAM-005',
      dogCount: 1,
      severity: 'warning',
      status: 'resolved',
      aiConfidence: 87.2,
      responseTime: '5 min'
    },
    {
      id: '003',
      timestamp: '2024-01-15 12:45:33',
      location: 'Garden Path C',
      cameraId: 'CAM-012',
      dogCount: 2,
      severity: 'warning',
      status: 'resolved',
      aiConfidence: 92.1,
      responseTime: '3 min'
    },
    {
      id: '004',
      timestamp: '2024-01-15 11:15:07',
      location: 'Side Entrance D',
      cameraId: 'CAM-008',
      dogCount: 1,
      severity: 'info',
      status: 'resolved',
      aiConfidence: 95.8,
      responseTime: '1 min'
    },
    {
      id: '005',
      timestamp: '2024-01-15 09:30:44',
      location: 'Main Gate - Block A',
      cameraId: 'CAM-001',
      dogCount: 4,
      severity: 'critical',
      status: 'resolved',
      aiConfidence: 99.1,
      responseTime: '1 min'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-alert-critical text-white';
      case 'warning': return 'bg-alert-warning text-white';
      case 'info': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return AlertTriangle;
      case 'warning': return AlertTriangle;
      default: return CheckCircle;
    }
  };

  const filteredData = historyData.filter(item => {
    const matchesSearch = item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.cameraId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || item.severity === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleExport = () => {
    // Mock export functionality
    const csvContent = [
      ['Timestamp', 'Location', 'Camera ID', 'Dog Count', 'Severity', 'AI Confidence', 'Response Time'],
      ...filteredData.map(item => [
        item.timestamp,
        item.location,
        item.cameraId,
        item.dogCount,
        item.severity,
        item.aiConfidence,
        item.responseTime
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'detection_history.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Detection History</h1>
            <p className="text-muted-foreground">Complete log of all detection events and system alerts</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="border-dashboard-card-border">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location or camera ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex space-x-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="warning">Warning</option>
                  <option value="info">Info</option>
                </select>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-dashboard-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">47</div>
              <div className="text-sm text-muted-foreground">Total Detections</div>
            </CardContent>
          </Card>
          <Card className="border-dashboard-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-alert-critical">8</div>
              <div className="text-sm text-muted-foreground">Critical Alerts</div>
            </CardContent>
          </Card>
          <Card className="border-dashboard-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">2.3 min</div>
              <div className="text-sm text-muted-foreground">Avg Response</div>
            </CardContent>
          </Card>
          <Card className="border-dashboard-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-status-online">95.2%</div>
              <div className="text-sm text-muted-foreground">AI Accuracy</div>
            </CardContent>
          </Card>
        </div>

        {/* History Table */}
        <Card className="border-dashboard-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Detection Events Log</span>
              <Badge variant="outline">{filteredData.length} entries</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredData.map((event) => {
                const SeverityIcon = getSeverityIcon(event.severity);
                return (
                  <div key={event.id} className="border border-dashboard-card-border rounded-lg p-4 hover:bg-dashboard-hover transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-3 lg:space-y-0">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Badge className={getSeverityColor(event.severity)}>
                            <SeverityIcon className="h-3 w-3 mr-1" />
                            {event.severity.toUpperCase()}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{event.timestamp}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Camera className="h-4 w-4 text-muted-foreground" />
                              <span>{event.cameraId}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{event.dogCount} dogs detected</span>
                            </div>
                            <div>AI Confidence: {event.aiConfidence}%</div>
                            <div>Response: {event.responseTime}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Download Report
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <Clock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No detection events found</p>
                <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default History;