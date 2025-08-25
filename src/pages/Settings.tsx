import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Camera,
  Zap,
  Users,
  Save,
  RotateCcw
} from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <SettingsIcon className="h-6 w-6" />
              <span>System Settings</span>
            </h1>
            <p className="text-muted-foreground">Configure your AI detection and alert system</p>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </Button>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alert Settings */}
          <Card className="border-dashboard-card-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Alert Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="sound-alerts">Sound Alerts</Label>
                <Switch id="sound-alerts" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <Switch id="push-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="email-alerts">Email Alerts</Label>
                <Switch id="email-alerts" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-alerts">SMS Alerts</Label>
                <Switch id="sms-alerts" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alert-threshold">Detection Sensitivity</Label>
                <select 
                  id="alert-threshold"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="high">High Sensitivity</option>
                  <option value="medium" selected>Medium Sensitivity</option>
                  <option value="low">Low Sensitivity</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Camera Settings */}
          <Card className="border-dashboard-card-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span>Camera Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="night-vision">Night Vision Mode</Label>
                <Switch id="night-vision" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="motion-detection">Motion Detection</Label>
                <Switch id="motion-detection" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-tracking">Auto Tracking</Label>
                <Switch id="auto-tracking" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resolution">Recording Quality</Label>
                <select 
                  id="resolution"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="4k">4K Ultra HD</option>
                  <option value="1080p" selected>1080p Full HD</option>
                  <option value="720p">720p HD</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="storage-duration">Storage Duration</Label>
                <Input 
                  id="storage-duration" 
                  placeholder="30 days" 
                  defaultValue="30"
                />
              </div>
            </CardContent>
          </Card>

          {/* IoT Controls */}
          <Card className="border-dashboard-card-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>IoT Device Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-repeller">Auto Ultrasonic Repeller</Label>
                <Switch id="auto-repeller" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="warning-lights">Warning Light System</Label>
                <Switch id="warning-lights" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="emergency-siren">Emergency Siren</Label>
                <Switch id="emergency-siren" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="activation-delay">Activation Delay (seconds)</Label>
                <Input 
                  id="activation-delay" 
                  type="number" 
                  placeholder="5" 
                  defaultValue="5"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="device-timeout">Device Timeout (minutes)</Label>
                <Input 
                  id="device-timeout" 
                  type="number" 
                  placeholder="10" 
                  defaultValue="10"
                />
              </div>
            </CardContent>
          </Card>

          {/* AI Model Settings */}
          <Card className="border-dashboard-card-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>AI Model Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
                <Input 
                  id="confidence-threshold" 
                  type="number" 
                  placeholder="85" 
                  defaultValue="85"
                />
                <p className="text-xs text-muted-foreground">Minimum confidence level for detection (0-100%)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="detection-zones">Detection Zones</Label>
                <select 
                  id="detection-zones"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="all">All Areas</option>
                  <option value="restricted">Restricted Areas Only</option>
                  <option value="custom">Custom Zones</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="batch-processing">Batch Processing</Label>
                <Switch id="batch-processing" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="model-learning">Continuous Learning</Label>
                <Switch id="model-learning" defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card className="border-dashboard-card-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>User Access Control</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input 
                  id="admin-email" 
                  type="email" 
                  placeholder="admin@example.com" 
                  defaultValue="admin@campus.edu"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="security-phone">Security Team Phone</Label>
                <Input 
                  id="security-phone" 
                  type="tel" 
                  placeholder="+91-9876543210" 
                  defaultValue="+91-9876543210"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="multi-user">Multi-User Access</Label>
                <Switch id="multi-user" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="guest-mode">Guest View Mode</Label>
                <Switch id="guest-mode" />
              </div>

              <Button className="w-full" variant="outline">
                Manage User Permissions
              </Button>
            </CardContent>
          </Card>

          {/* System Information */}
          <Card className="border-dashboard-card-border">
            <CardHeader>
              <CardTitle>System Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">System Version</p>
                  <p className="font-medium">v2.1.5</p>
                </div>
                <div>
                  <p className="text-muted-foreground">AI Model</p>
                  <p className="font-medium">YOLO v8.2</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Uptime</p>
                  <p className="font-medium">15 days, 4h</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Storage Used</p>
                  <p className="font-medium">68% (2.1TB)</p>
                </div>
              </div>
              
              <div className="pt-3 border-t border-dashboard-card-border">
                <Button className="w-full" variant="outline">
                  System Diagnostics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;