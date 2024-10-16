// data.js

export const graphData = {
    nodes: [
        { id: 'Multithreading', group: 1 },                 // Root Node
        { id: 'Processes vs Threads', group: 1 },            // Level 1 - Left
        { id: 'Concurrency', group: 2 },                     // Level 1 - Right
        { id: 'Parallelism', group: 2 },                     // Level 2 - Left
        { id: 'Synchronization', group: 3 },                 // Level 2 - Right
        { id: 'Memory Models', group: 2 },                   // Level 2 - Left (Right subtree balance)
        { id: 'Asynchronous Programming', group: 7 },        // Level 2 - Right (Right subtree balance)
        { id: 'Thread Pools', group: 4 },                    // Level 3 - Left
        { id: 'Race Conditions', group: 4 },                 // Level 3 - Right
        { id: 'Mutexes', group: 3 },                         // Level 3 - Left
        { id: 'Semaphores', group: 3 },                      // Level 3 - Right
        { id: 'Context Switching', group: 6 },               // Level 3 - Left (Memory Models subtree)
        { id: 'Thread Scheduling', group: 6 },               // Level 3 - Right (Memory Models subtree)
        { id: 'Reactive Programming', group: 7 },            // Level 3 - Left (Asynchronous Programming subtree)
        { id: 'Futures and Promises', group: 7 },            // Level 3 - Right (Asynchronous Programming subtree)
        { id: 'Deadlocks', group: 4 },                       // Level 4 - Left (Thread Pools subtree)
        { id: 'Thread Safety', group: 5 },                   // Level 4 - Right (Race Conditions subtree)
        { id: 'Atomic Operations', group: 5 },               // Level 5 - Left
        { id: 'Lock-Free Programming', group: 5 },           // Level 5 - Right
        { id: 'GIL (Global Interpreter Lock)', group: 8 },   // Level 4 - Left (Context Switching subtree)
        { id: 'Testing', group: 4 },                         // Additional Node for Balance
      ],
      links: [
        // Level 0 to Level 1
        { source: 'Multithreading', target: 'Processes vs Threads' },
        { source: 'Multithreading', target: 'Concurrency' },
        
        // Level 1 to Level 2 (Left Subtree)
        { source: 'Processes vs Threads', target: 'Parallelism' },
        { source: 'Processes vs Threads', target: 'Synchronization' },
        
        // Level 1 to Level 2 (Right Subtree)
        { source: 'Concurrency', target: 'Memory Models' },
        { source: 'Concurrency', target: 'Asynchronous Programming' },
        
        // Level 2 to Level 3 (Left Subtree - Parallelism)
        { source: 'Parallelism', target: 'Thread Pools' },
        { source: 'Parallelism', target: 'Race Conditions' },
        
        // Level 2 to Level 3 (Right Subtree - Synchronization)
        { source: 'Synchronization', target: 'Mutexes' },
        { source: 'Synchronization', target: 'Semaphores' },
        
        // Level 2 to Level 3 (Right Subtree - Memory Models)
        { source: 'Memory Models', target: 'Context Switching' },
        { source: 'Memory Models', target: 'Thread Scheduling' },
        
        // Level 2 to Level 3 (Right Subtree - Asynchronous Programming)
        { source: 'Asynchronous Programming', target: 'Reactive Programming' },
        { source: 'Asynchronous Programming', target: 'Futures and Promises' },
        
        // Level 3 to Level 4 (Left Subtree - Thread Pools)
        { source: 'Thread Pools', target: 'Deadlocks' },
        
        // Level 3 to Level 4 (Right Subtree - Race Conditions)
        { source: 'Race Conditions', target: 'Thread Safety' },
        
        // Level 4 to Level 5 (Thread Safety)
        { source: 'Thread Safety', target: 'Atomic Operations' },
        { source: 'Thread Safety', target: 'Lock-Free Programming' },
        
        // Level 4 to Level 5 (Context Switching)
        { source: 'Context Switching', target: 'GIL (Global Interpreter Lock)' },
        
        // Level 3 to Level 4 (Additional Link for Balance)
        { source: 'Synchronization', target: 'Testing' },
      ],
  };
  
  export const nodeContent = {
    'Multithreading': [
      // Page 1 - Context and Analogy
      "Multithreading can be likened to a well-coordinated orchestra where multiple musicians (threads) play different instruments simultaneously to create a harmonious symphony (program). Each musician plays their part independently yet in synchronization with others, contributing to the overall performance without causing discord. In computing, multithreading allows a program to perform multiple tasks concurrently within a single process, improving efficiency and responsiveness. This means that one part of your program doesn't have to wait for another to complete its task before proceeding, much like how different sections of an orchestra play together without waiting for others to finish. This concurrent execution leads to better utilization of CPU resources and can significantly enhance the performance of applications, especially those that handle numerous simultaneous operations like web servers or complex computations.",
  
      // Page 2 - Definition
      "Multithreading is a programming and execution model that enables multiple threads to exist within the context of a single process. These threads share the process's resources but can execute independently, allowing for parallelism within a program. Each thread represents a separate flow of control, capable of performing tasks concurrently with other threads. Multithreading leverages the capabilities of modern multi-core processors by distributing tasks across multiple cores, leading to improved application performance. It is essential in applications where multiple operations need to occur simultaneously, such as handling user interactions while performing background calculations. By using threads, developers can create more responsive and efficient programs that make better use of system resources.",
  
      // Page 3 - Practical Applications
      "Multithreading is widely used in various domains to enhance performance and responsiveness. In graphical user interface (GUI) applications, multithreading ensures that the interface remains responsive to user input even while processing intensive tasks in the background. Web servers utilize multithreading to handle multiple client requests simultaneously, allowing them to serve many users efficiently. In gaming, multithreading enables complex computations like physics simulations, AI processing, and rendering to occur concurrently, providing smoother gameplay experiences. Additionally, in scientific computing and data analysis, multithreading allows for parallel processing of large datasets, significantly reducing computation time. Overall, multithreading is a fundamental concept that underpins modern software development, enabling applications to perform efficiently in today's multi-core, multi-tasking computing environments."
    ],
  
    'Processes vs Threads': [
      // Page 1 - Context and Analogy
      "Imagine a city where each house represents a process and the rooms within a house represent threads. Houses (processes) are independent and have their own separate properties, like different addresses and utilities. Rooms within a house (threads) share the same address and utilities but can be occupied independently. Similarly, in computing, processes are independent execution units with their own memory space, while threads are subdivisions of processes that share the same memory and resources but can execute tasks independently. Understanding the distinction between processes and threads is crucial for designing efficient software, as it influences how resources are managed and how tasks are scheduled and executed within an application.",
  
      // Page 2 - Definition
      "A process is an instance of a computer program that contains the program code and its current activity. Each process has its own separate memory space and system resources, providing isolation and security from other processes. Threads, on the other hand, are the smallest sequence of programmed instructions that can be managed independently by a scheduler. They are lightweight and exist within processes, sharing the same memory and resources of the parent process. This shared environment allows threads to communicate more efficiently but also introduces challenges in synchronization and resource management. The primary difference lies in their operational scope and resource sharing capabilities, with processes being heavier and more isolated compared to threads.",
  
      // Page 3 - Practical Applications
      "Processes are used when tasks need to be executed in isolation, ensuring that one process does not interfere with the memory and resources of another. This is common in operating systems where multiple applications run simultaneously without affecting each other. For example, running a web browser and a text editor as separate processes. Threads are used within a process to perform multiple tasks concurrently, such as in a web browser where one thread handles user interactions while another loads web content. In server applications, threads enable handling multiple client requests within the same process efficiently. Understanding when to use processes versus threads is essential for optimizing performance, resource utilization, and ensuring application stability."
    ],
  
    'Concurrency': [
      // Page 1 - Context and Analogy
      "Concurrency is like a chef preparing multiple dishes by juggling tasks—chopping vegetables, boiling pasta, and baking a cake—switching between them as needed. Although the chef is not cooking all dishes simultaneously, they manage their time to ensure all dishes are ready around the same time. In computing, concurrency refers to the ability of a program to manage multiple tasks that can be in progress at the same time, without necessarily executing them simultaneously. It is about dealing with lots of things at once, making efficient use of resources by interleaving tasks and ensuring that a program remains responsive.",
  
      // Page 2 - Definition
      "Concurrency in computing is a property of systems in which several computations are executing during overlapping time periods, not necessarily simultaneously. It involves multiple sequences of operations happening in a way that the system progresses on more than one task at a time. Concurrency is achieved through techniques like context switching, where the CPU switches between different tasks rapidly, giving the illusion of simultaneous execution. It is essential for programs that need to handle multiple tasks, such as user inputs, file operations, and network communications, ensuring that no single task monopolizes the system's resources.",
  
      // Page 3 - Practical Applications
      "Concurrency is vital in environments where multiple tasks need to be managed efficiently, such as web servers handling numerous client connections, desktop applications that must remain responsive while performing background operations, and operating systems that manage multiple running applications. In mobile applications, concurrency allows background tasks like data synchronization to occur without disrupting the user interface. Concurrency also plays a crucial role in real-time systems where timely task execution is critical, such as in embedded systems controlling machinery or processing sensor data. By enabling multiple tasks to make progress without waiting for others to complete, concurrency improves overall system efficiency and user experience."
    ],
  
    'Parallelism': [
      // Page 1 - Context and Analogy
      "Parallelism can be compared to a restaurant kitchen where multiple chefs (processors or cores) work on different dishes at the same time. One chef grills steaks while another prepares salads, and a third bakes desserts—all tasks are performed simultaneously, leading to faster meal preparation. In computing, parallelism refers to the simultaneous execution of multiple tasks or computations, leveraging multiple CPU cores or processors to perform work more quickly. This direct simultaneous execution contrasts with concurrency's interleaving of tasks and is key to achieving high performance in computationally intensive applications.",
  
      // Page 2 - Definition
      "Parallelism is a type of computation in which many calculations or processes are carried out simultaneously. It leverages multiple processing units (such as multi-core processors or multiple machines) to perform tasks concurrently, dividing a large problem into smaller sub-problems that can be solved at the same time. Parallelism is about doing many things at once, and it's an essential concept for improving performance in applications that require significant computational power, enabling them to utilize hardware capabilities fully.",
  
      // Page 3 - Practical Applications
      "Parallelism is crucial in fields that involve large-scale computations, such as scientific simulations, weather forecasting, data mining, and machine learning. For instance, in image and signal processing, parallelism allows for simultaneous processing of different parts of the data, significantly speeding up tasks like rendering high-resolution graphics or analyzing large datasets. In high-performance computing (HPC), parallelism enables the solving of complex mathematical models and simulations that would be impractical to run sequentially. By distributing workloads across multiple processors or cores, applications can achieve faster processing times and handle more significant amounts of data."
    ],
  
    'Synchronization': [
      // Page 1 - Context and Analogy
      "Synchronization in computing is akin to traffic lights at an intersection, ensuring that cars (threads) proceed in an orderly fashion to prevent collisions (data corruption). Just as traffic signals control the flow of vehicles to avoid accidents, synchronization mechanisms control the access of multiple threads to shared resources. Without proper synchronization, threads may interfere with each other, leading to unpredictable results and system instability. Synchronization ensures that only one thread can access a critical section of code or data at a time, maintaining data integrity and consistent program behavior.",
  
      // Page 2 - Definition
      "Synchronization is a mechanism that coordinates the execution of threads to ensure that shared resources are accessed in a controlled manner. It prevents multiple threads from entering critical sections of code that manipulate shared data simultaneously. Synchronization techniques include locks, semaphores, monitors, and barriers, which manage the access to resources and ensure that threads wait appropriately when necessary. Proper synchronization is essential for avoiding issues like race conditions, deadlocks, and data corruption in concurrent programming environments.",
  
      // Page 3 - Practical Applications
      "Synchronization is vital in multi-threaded applications where threads share data or resources. In database systems, synchronization mechanisms ensure that transactions are executed reliably without interfering with each other, maintaining data consistency. In operating systems, synchronization is used to manage access to hardware resources, files, and memory, preventing conflicts between processes and threads. In real-time systems, synchronization ensures that tasks meet their timing constraints while accessing shared resources safely. Overall, synchronization techniques are fundamental for building reliable, concurrent applications that function correctly under various conditions."
    ],
  
    'Mutexes': [
      // Page 1 - Context and Analogy
      "A mutex, short for mutual exclusion, is like a restroom key in an office where only one person can use the facility at a time. If someone is using it, others must wait until it's available. In computing, a mutex is a locking mechanism used to synchronize access to a resource. When a thread locks a mutex, it gains exclusive access to the resource, and no other thread can access it until the mutex is unlocked. This ensures that critical sections of code are executed by only one thread at a time, preventing conflicts and ensuring data integrity.",
  
      // Page 2 - Definition
      "A mutex is a synchronization primitive that provides mutual exclusion, allowing only one thread to access a shared resource or critical section of code at a time. It works by having threads acquire the mutex before entering the critical section and release it upon exiting. If a mutex is already locked by another thread, any thread attempting to lock it will be blocked until the mutex is released. Mutexes are essential for preventing race conditions when multiple threads need to read and write shared data.",
  
      // Page 3 - Practical Applications
      "Mutexes are widely used in multi-threaded applications to protect shared data structures, such as linked lists, hash tables, or any resource that requires exclusive access. In operating systems, mutexes manage access to system resources, ensuring that only one process modifies critical settings at a time. In embedded systems, mutexes help coordinate tasks that interact with hardware components. Developers use mutexes to ensure that concurrent operations do not interfere with each other, maintaining the integrity of data and the correct functioning of applications."
    ],
  
    'Semaphores': [
      // Page 1 - Context and Analogy
      "Semaphores can be thought of as a limited number of keys to a shared resource, like a set number of parking spots in a lot. When all spots are occupied (the semaphore count reaches zero), incoming cars must wait until a spot becomes available. In computing, semaphores are synchronization tools that control access to a resource that has a limited capacity. They allow multiple threads to use a finite number of instances of a resource concurrently, managing resource allocation efficiently.",
  
      // Page 2 - Definition
      "A semaphore is a synchronization primitive that uses a counter to control access to shared resources. It allows a specified number of threads to access the resource simultaneously. The semaphore counter is decremented each time a thread acquires the semaphore and incremented when a thread releases it. If the counter reaches zero, additional threads attempting to acquire the semaphore are blocked until the counter becomes positive again. Semaphores are used to manage resources that have a limited number of instances, preventing overuse and contention.",
  
      // Page 3 - Practical Applications
      "Semaphores are commonly used in scenarios where a fixed number of identical resources are available, such as a pool of database connections, a fixed number of printers, or limited hardware components. In operating systems, semaphores manage access to finite resources like memory or processor time slots. In networking, semaphores control the number of simultaneous connections to a server. By using semaphores, developers can prevent resource exhaustion and ensure that applications handle resource limits gracefully, maintaining system stability and performance."
    ],
  
    'Deadlocks': [
      // Page 1 - Context and Analogy
      "A deadlock is like a standoff between two drivers on a narrow bridge, where neither can move forward because each is blocking the other's path. In computing, a deadlock occurs when two or more threads are each waiting for the other to release a resource, causing all of them to be stuck indefinitely. This situation halts progress and can bring parts of a system or application to a complete standstill if not properly managed or avoided.",
  
      // Page 2 - Definition
      "A deadlock is a situation in concurrent programming where a set of threads are blocked because each thread holds a resource and waits for another resource held by another thread. The necessary conditions for a deadlock are mutual exclusion, hold and wait, no preemption, and circular wait. Deadlocks are challenging to detect and resolve because they often depend on the specific timing and sequence of events in a multi-threaded environment. Preventing deadlocks requires careful resource management and synchronization strategies.",
  
      // Page 3 - Practical Applications
      "Deadlocks are critical issues in systems like databases, operating systems, and network services where multiple threads or processes compete for resources. To prevent deadlocks, developers use techniques such as resource hierarchy (always acquiring locks in a predefined order), implementing timeout and retry mechanisms, or avoiding mutual exclusion when possible. In databases, deadlock detection algorithms monitor transactions and roll back one to break the cycle. Understanding and preventing deadlocks is essential for building reliable and robust concurrent applications."
    ],
  
    'Thread Pools': [
      // Page 1 - Context and Analogy
      "Thread pools are like a team of on-call workers ready to perform tasks as they arrive, rather than hiring new workers each time a task needs to be done. This approach reduces the overhead of recruiting and training new staff. In computing, a thread pool maintains a collection of reusable threads that stand ready to execute tasks. By reusing existing threads, applications avoid the performance costs associated with creating and destroying threads for every single task.",
  
      // Page 2 - Definition
      "A thread pool is a group of pre-instantiated, idle threads that are kept ready to perform tasks. When a task arrives, it is assigned to a thread in the pool, which executes the task and then returns to the pool to await more work. Thread pools help manage system resources more efficiently by limiting the number of active threads and reusing them for multiple tasks. This approach prevents the overhead and resource consumption that would result from creating a new thread for each task.",
  
      // Page 3 - Practical Applications
      "Thread pools are extensively used in server applications, such as web servers, application servers, and database servers, where they handle multiple client requests efficiently. In GUI applications, thread pools manage background tasks to keep the user interface responsive. In parallel computing, thread pools are used to execute a large number of short-lived tasks concurrently. By controlling the number of threads, thread pools help prevent resource exhaustion and improve the scalability and performance of multi-threaded applications."
    ],
  
    // Continue with detailed content for the remaining nodes...
  'Race Conditions': [
  // Page 1 - Context and Analogy
  "A race condition is like two people trying to edit the same document simultaneously without coordination. One person might overwrite the other's changes, leading to a final document that doesn't reflect the intended content of either. In computing, a race condition occurs when multiple threads access shared data or resources at the same time without proper synchronization, and the program's behavior depends on the sequence or timing of these accesses. This can lead to unpredictable results, data corruption, and difficult-to-find bugs, as the outcome may vary each time the program runs. Understanding and preventing race conditions is essential for ensuring the correctness and reliability of concurrent applications.",

  // Page 2 - Definition
  "A race condition is a flaw that occurs in a system where the output or result is unexpectedly and critically dependent on the sequence or timing of other uncontrollable events. Specifically, it happens when two or more threads access shared data concurrently, and at least one thread modifies the data. Without proper synchronization mechanisms, such as locks or atomic operations, the threads may interfere with each other, leading to inconsistent or incorrect results. Race conditions are notoriously challenging to detect and debug because they may not occur consistently and can be influenced by factors like system load and thread scheduling.",

  // Page 3 - Practical Applications
  "Preventing race conditions is crucial in any multi-threaded application that accesses shared resources. In financial systems, for example, race conditions could result in incorrect account balances if multiple transactions are processed simultaneously without proper synchronization. In operating systems, they could cause data corruption or crashes if system resources are accessed concurrently without coordination. Developers use synchronization primitives like mutexes, semaphores, and atomic variables to prevent race conditions. Tools like thread sanitizers and static code analysis can help detect potential race conditions during development. By carefully managing access to shared resources, programmers ensure that applications behave predictably and maintain data integrity in concurrent environments."
],

'Thread Safety': [
  // Page 1 - Context and Analogy
  "Thread safety is like establishing rules in a shared kitchen to prevent chefs from spoiling each other's dishes. If everyone follows the guidelines—such as labeling ingredients and cleaning up after themselves—the kitchen operates smoothly without mishaps. In programming, thread safety ensures that shared data structures or resources can be accessed by multiple threads without causing errors or corrupting data. It involves designing code in a way that concurrent execution by multiple threads does not lead to unexpected behavior. Thread-safe code is crucial in multi-threaded applications to maintain stability and reliability.",

  // Page 2 - Definition
  "Thread safety is the concept of ensuring that shared data or code can be safely used by multiple threads simultaneously without leading to race conditions, data corruption, or other concurrency-related bugs. A piece of code is considered thread-safe if it functions correctly during simultaneous execution by multiple threads. Achieving thread safety often involves using synchronization mechanisms like locks, semaphores, or designing immutable data structures. Thread-safe code guarantees that all access to shared resources is properly managed, so that the program's behavior remains consistent regardless of the timing or order of thread execution.",

  // Page 3 - Practical Applications
  "Thread safety is essential in libraries and frameworks that may be used in multi-threaded applications. For instance, collection classes in programming languages like Java and C# provide thread-safe versions to ensure that they can be safely used in concurrent contexts. In web servers, thread-safe code allows handling multiple client requests simultaneously without data leaks or corruption. In GUI applications, thread safety is crucial for updating user interface elements from background threads. Developers must carefully design and test their code to ensure thread safety, often employing patterns like thread confinement, immutability, and using synchronization primitives where necessary."
],

'Atomic Operations': [
  // Page 1 - Context and Analogy
  "Atomic operations are like transactions at a bank ATM that cannot be interrupted once they start. When you withdraw money, the ATM ensures that the transaction completes fully or not at all, preventing situations where money is deducted from your account but not dispensed. In computing, an atomic operation is an indivisible operation that completes in a single step relative to other threads. This means that no other thread can observe the operation in an incomplete state, ensuring data integrity even when multiple threads attempt to modify the same data concurrently.",

  // Page 2 - Definition
  "An atomic operation is a low-level operation that appears to execute instantaneously and without the possibility of interference from other threads. It is indivisible, meaning it cannot be split into smaller parts that could be interrupted by other operations. Atomic operations are fundamental in concurrent programming for implementing synchronization mechanisms and ensuring that shared variables are updated correctly. Examples include atomic increment or compare-and-swap instructions provided by modern CPUs. By using atomic operations, developers can build lock-free data structures and algorithms that avoid the overhead of traditional locking mechanisms.",

  // Page 3 - Practical Applications
  "Atomic operations are widely used in the implementation of concurrent data structures like atomic counters, queues, and stacks. They enable lock-free programming, which can improve performance in highly concurrent applications by reducing contention and overhead associated with locks. In multi-threaded algorithms, atomic operations help prevent race conditions when updating shared variables. Languages like Java and C++ provide atomic classes and operations in their standard libraries, allowing developers to perform atomic reads and writes, increments, and compare-and-set operations. Understanding and utilizing atomic operations is key to writing efficient and correct concurrent code."
],

'Lock-Free Programming': [
  // Page 1 - Context and Analogy
  "Lock-free programming is like a busy supermarket where customers can pick up items and proceed to self-checkout without waiting in line. Instead of having a single cashier (lock) that creates a bottleneck, each customer (thread) can independently complete their purchase, leading to faster overall throughput. In programming, lock-free techniques allow multiple threads to operate on shared data without using mutual exclusion locks, reducing waiting times and avoiding issues like deadlocks. This approach aims to improve performance and scalability in concurrent applications.",

  // Page 2 - Definition
  "Lock-free programming refers to designing algorithms and data structures that allow multiple threads to access and modify shared data concurrently without the use of locks for synchronization. Instead, it relies on atomic operations and careful coordination to ensure consistency. Lock-free algorithms guarantee that at least one thread makes progress in a finite number of steps, preventing system-wide stalls. This approach reduces overhead associated with locking, minimizes contention, and eliminates the risk of deadlocks. Lock-free programming is a complex but powerful technique for achieving high-performance concurrency.",

  // Page 3 - Practical Applications
  "Lock-free programming is critical in high-performance systems where the overhead of locks is unacceptable, such as real-time systems, high-frequency trading platforms, and low-latency network applications. It is used in building scalable concurrent data structures like queues, stacks, and hash tables that perform efficiently under heavy contention. Libraries and frameworks often provide lock-free implementations for critical components to improve throughput. While challenging to implement correctly due to complexities like the ABA problem, lock-free programming offers significant advantages in terms of performance and responsiveness in multi-threaded environments."
],

'Memory Models': [
  // Page 1 - Context and Analogy
  "A memory model is like the blueprint of a warehouse that defines how goods (data) are stored, retrieved, and kept consistent across different loading docks (processors). Without a clear plan, workers might overwrite each other's shipments or send out incorrect orders. In computing, memory models define the rules for how operations on memory occur in multi-threaded programs, specifying how changes made by one thread become visible to others. They provide a framework for reasoning about concurrent execution and ensuring consistency across different hardware architectures and compilers.",

  // Page 2 - Definition
  "A memory model is a formal specification that describes how threads interact through memory in a multi-threaded system. It defines the allowed behaviors for read and write operations on shared memory, including the order in which memory operations may appear to execute and when changes become visible to other threads. Memory models account for factors like compiler optimizations, CPU instruction reordering, and caching. They are crucial for understanding and predicting the behavior of concurrent programs, ensuring that code executes correctly on different hardware platforms.",

  // Page 3 - Practical Applications
  "Memory models are essential in programming languages like Java and C++, which define their own memory models to guide developers in writing correct concurrent code. They inform the use of synchronization constructs like volatile variables, atomic operations, and memory barriers. In hardware architecture, memory models dictate how processors handle memory consistency and caching, impacting performance and correctness. Understanding memory models helps developers avoid subtle concurrency bugs that can arise from unexpected instruction reordering or memory visibility issues, leading to more robust and portable multi-threaded applications."
],

'Context Switching': [
  // Page 1 - Context and Analogy
  "Context switching is like a teacher in a classroom shifting attention between different students. When one student needs help, the teacher pauses their current interaction and attends to the next, keeping track of where they left off with each student. In computing, context switching refers to the process where a CPU switches from executing one thread or process to another, saving the state of the current task and loading the state of the next. While necessary for multitasking, context switching incurs overhead, as the CPU must spend time storing and loading states.",

  // Page 2 - Definition
  "Context switching is the mechanism by which an operating system switches the CPU's focus from one thread or process to another. During a context switch, the system saves the state (context) of the currently running task, including registers, program counter, and memory mappings, and restores the state of the next task to be executed. This allows multiple threads or processes to share a single CPU, enabling multitasking and efficient resource utilization. However, frequent context switches can degrade performance due to the overhead of saving and restoring states.",

  // Page 3 - Practical Applications
  "Context switching is fundamental in multitasking operating systems, allowing them to run multiple applications seemingly simultaneously. In real-time systems, minimizing context switch overhead is crucial to meet timing constraints. High-performance applications aim to reduce context switches to improve efficiency, often by using techniques like thread affinity or asynchronous programming. Understanding context switching helps developers optimize applications by structuring code to reduce unnecessary switches, such as by batching tasks or using cooperative multitasking where appropriate."
],

'Thread Scheduling': [
  // Page 1 - Context and Analogy
  "Thread scheduling is like a manager assigning shifts to employees based on priority and availability. Critical tasks are assigned first to ensure they are completed on time, while less urgent tasks are scheduled around them. In computing, thread scheduling determines the order and duration that threads are allocated CPU time. The scheduler aims to optimize CPU utilization, responsiveness, and fairness among threads. Effective thread scheduling ensures that high-priority tasks receive the necessary resources without starving lower-priority ones.",

  // Page 2 - Definition
  "Thread scheduling is the process by which an operating system or runtime system decides which thread to execute next on a CPU core. The scheduler uses algorithms to prioritize threads based on factors like priority levels, execution time, and resource requirements. Common scheduling algorithms include round-robin, priority-based, and fair-share scheduling. The scheduler's decisions impact the application's performance, responsiveness, and ability to meet real-time deadlines. Thread scheduling is a critical component of concurrent programming, balancing the needs of multiple threads competing for CPU resources.",

  // Page 3 - Practical Applications
  "In operating systems, thread scheduling ensures that all running processes and threads receive adequate CPU time, maintaining system responsiveness. Real-time systems require precise scheduling to meet strict timing requirements, often using priority-based or deadline-driven scheduling algorithms. In high-performance computing, developers may use thread affinity to bind threads to specific CPU cores, reducing context switch overhead and improving cache utilization. Understanding thread scheduling allows developers to optimize multi-threaded applications by appropriately setting thread priorities and designing tasks that cooperate with the scheduler for better performance."
],

'Asynchronous Programming': [
  // Page 1 - Context and Analogy
  "Asynchronous programming is like ordering a meal at a restaurant and then engaging in conversation while waiting, rather than standing idle until the food arrives. In programming, asynchronous execution allows a program to initiate potentially time-consuming operations and continue executing other tasks without waiting for the operation to complete. This approach enhances responsiveness and resource utilization, especially in applications that perform I/O operations or network requests where delays are unpredictable.",

  // Page 2 - Definition
  "Asynchronous programming is a programming paradigm that enables a unit of work to run separately from the main application thread, notifying the main thread when the work is complete. It relies on constructs like callbacks, promises, futures, or async/await keywords to manage the execution flow. Asynchronous code is non-blocking, meaning it doesn't halt the execution of the program while waiting for an operation to finish. This is particularly useful for improving the performance of applications that deal with I/O-bound tasks or need to remain responsive to user input.",

  // Page 3 - Practical Applications
  "Asynchronous programming is widely used in web development for handling network requests, file I/O, and user interactions without freezing the user interface. In server-side applications, it allows efficient handling of multiple client connections by utilizing event loops and non-blocking I/O. Languages like JavaScript, Python, and C# provide built-in support for asynchronous programming, making it easier to write code that performs well under high concurrency. By adopting asynchronous patterns, developers can create scalable applications that make better use of system resources and provide smoother user experiences."
],

'Reactive Programming': [
  // Page 1 - Context and Analogy
  "Reactive programming is like a smart home system that automatically adjusts lighting and temperature in response to environmental changes or user actions. Instead of manually controlling each device, the system reacts to events and updates the state accordingly. In computing, reactive programming is a declarative programming paradigm focused on data streams and the propagation of change. It allows applications to automatically update and respond to new data, making it easier to handle dynamic and event-driven scenarios.",

  // Page 2 - Definition
  "Reactive programming is a programming paradigm centered around asynchronous data streams and the propagation of change. In reactive programming, components emit data over time, and other components subscribe to these streams to react to new data or events. This approach enables the development of systems that are responsive, resilient, and scalable. Reactive programming abstracts away the complexities of asynchronous programming, providing a higher-level model for composing and transforming data streams.",

  // Page 3 - Practical Applications
  "Reactive programming is used extensively in developing modern user interfaces, where applications need to respond to user inputs, sensor data, or real-time updates seamlessly. Frameworks like ReactiveX, RxJava, and RxJS provide tools for implementing reactive programming patterns. In back-end development, reactive programming enhances the handling of asynchronous I/O operations, enabling servers to manage large numbers of concurrent connections efficiently. By embracing reactive programming, developers can build systems that are more maintainable and adaptable to changing data and requirements."
],

'Futures and Promises': [
  // Page 1 - Context and Analogy
  "Futures and promises are like ordering a product online and receiving a tracking number. You can continue with your day, periodically checking the status, knowing that the item will arrive eventually. In programming, futures and promises represent a value that may not be immediately available but will be provided at some point in the future. They allow asynchronous operations to return a placeholder, enabling the program to proceed without blocking while waiting for the result.",

  // Page 2 - Definition
  "A future is an object that acts as a proxy for a result that is initially unknown, usually because the computation of its value is yet incomplete. A promise is a write-once container that sets the value of a future when the asynchronous computation completes. Futures and promises work together to enable asynchronous programming by decoupling the creation of a result from its consumption. They allow developers to write code that can handle the eventual completion of asynchronous tasks in a more manageable and readable way.",

  // Page 3 - Practical Applications
  "Futures and promises are fundamental in asynchronous programming models found in languages like JavaScript (Promises), Java (CompletableFuture), and Scala (Futures). They are used extensively in handling network requests, file I/O operations, and long-running computations without blocking the main execution thread. By leveraging futures and promises, developers can write code that is both non-blocking and easier to reason about, avoiding callback hell and improving the structure of asynchronous operations. This leads to more responsive applications, especially in environments where I/O latency can vary significantly."
],

'GIL (Global Interpreter Lock)': [
  // Page 1 - Context and Analogy
  "The Global Interpreter Lock (GIL) is like having a single cashier in a busy supermarket where only one customer can check out at a time, despite multiple checkout lanes being available. This bottleneck prevents customers (threads) from checking out (executing bytecode) simultaneously, slowing down the overall process. In the context of Python's CPython interpreter, the GIL is a mutex that allows only one thread to execute Python bytecode at a time, limiting parallelism in multi-threaded programs.",

  // Page 2 - Definition
  "The Global Interpreter Lock (GIL) is a mutual exclusion lock that protects access to Python objects, preventing multiple native threads from executing Python bytecodes simultaneously in the CPython interpreter. The GIL simplifies the implementation of the interpreter by ensuring that memory management is thread-safe. However, it also means that multi-threaded Python programs cannot fully utilize multiple CPU cores for CPU-bound tasks, as threads must acquire the GIL before executing, leading to contention and limited concurrency.",

  // Page 3 - Practical Applications
  "The GIL significantly impacts the performance of CPU-bound multi-threaded Python programs, limiting their ability to achieve true parallelism. Developers often work around the GIL by using multiprocessing, which involves running multiple processes instead of threads, each with its own Python interpreter and memory space. Alternatively, they may use implementations of Python without a GIL, such as Jython or IronPython, or leverage extensions written in languages like C that release the GIL during execution. Understanding the GIL is crucial for optimizing Python applications and choosing the right concurrency model based on the nature of the tasks (CPU-bound vs. I/O-bound)."
],

    // Note: Due to space limitations, the content for the remaining nodes is not included here.
  };
  