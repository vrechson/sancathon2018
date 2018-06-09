const int trigPin = 9;
const int echoPin = 10;

long duration;
int distance;
unsigned long time;

void setup () {

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);  
  
}

void loop () {
  
  if (Serial.available() > 0) {
    while (Serial.available() > 0) Serial.read();
    digitalWrite(trigPin, LOW);
    time = micros();
    while (micros() - time <= 2) {}
    
    digitalWrite(trigPin, HIGH);
    while (micros() - time <= 10) {}
    digitalWrite(trigPin, LOW);
    
    duration = pulseIn (echoPin, HIGH);
    distance = duration*0.034/2;
    
    Serial.println(distance);
  }
}
