function solve(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated = worker.weight * 0.1;
        worker.dizziness = false;
    }

    return worker;
}