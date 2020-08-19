import socket
import time

def Main():
    host="127.0.0.1"
    port=5001
    mysocket=socket.socket()
    mysocket.bind((host,port))
    mysocket.listen(1)
    conn,addr = mysocket.accept()
    print("connection:"+str(addr))
    while True:
        data=conn.recv(1024).decode()
        print("clint says:"+str(data))
        if not data:
            break
        message = input("enter a message:")
        conn.send(message.encode())
        conn.close()
if __name__ == '__main__':
    Main()